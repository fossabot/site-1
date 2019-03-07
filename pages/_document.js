import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
const dev = process.env.NODE_ENV !== "production";
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Jhonny Arana</title>
          <meta charSet="UTF-8" />
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.zeit.co/favicon/favicon-32x32.png"
          />
          <meta content="Jhonny Arana" property="og:title" />
          <meta name="author" content="Jhonny Arana" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          <meta
            name="description"
            content="Hola mi nombre es Jhonny Arana y este es mi sitio en internet."
          />
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:description"
            content="Hola mi nombre es Jhonny Arana y este es mi sitio en internet."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.ravenjs.com/3.16.0/raven.min.js"
            crossorigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `Raven.config(
                'https://6176e34da5544f52839ffd13766870c0@sentry.io/184648'
              ).install()`
            }}
          />
          {!dev ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-100351775-1', 'auto');
                ga('send', 'pageview');`
              }}
            />
          ) : null}
        </body>
      </html>
    );
  }
}
