const dev = process.env.NODE_ENV !== "production";
const { parse } = require("url");
const express = require("express");
const LRUCache = require("lru-cache");
const next = require("next");
const path = require("path");
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();
const Raven = require("raven");
const moduleAlias = require("module-alias");
const PORT = 3000;

Raven.config(
  "https://6176e34da5544f52839ffd13766870c0:2214b0363cfb498c972941cb665424a8@sentry.io/184648"
).install();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 30 // 30 min cache
});

const cachedRender = async (req, res, pagePath, queryParams) => {
  const key = `${req.url}`;

  if (!dev && ssrCache.has(key)) {
    res.append("X-Cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }
  try {
    await app
      .renderToHTML(req, res, pagePath, queryParams)
      .then(async html => {
        await ssrCache.set(key, html);

        await res.append("X-Cache", "MISS");
        await res.send(html);
      })
      .catch(async err => {
        await app.renderError(err, req, res, pagePath, queryParams);
      });
  } catch (e) {
    Raven.captureException(e);
  }
};

app.prepare().then(async () => {
  const server = await express();
  server.disable("x-powered-by");

  try {
    await server.get("/hackintosh", async (req, res) => {
      await cachedRender(req, res, "/hackintosh");
    });

    await server.get("/", async (req, res) => {
      await cachedRender(req, res, "/index");
    });

    await server.get("/service-worker.js", async (req, res) => {
      res.sendFile(path.resolve("./dist/service-worker.js"));
    });

    await server.get("*", async (req, res) => {
      const parsedUrl = await parse(req.url, true);
      await handle(req, res, parsedUrl);
    });
  } catch (e) {
    await Raven.captureException(e);
  }
  await server.listen(PORT, async err => {
    if (err) {
      throw err;
    }

    await console.log(`> Ready on http://localhost:${PORT}`);
  });
});
