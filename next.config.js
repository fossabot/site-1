const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  distDir: 'dist',
  webpack(config, { dev }) {
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== 'UglifyJsPlugin'
    })

    if (!dev) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            exclude: /react\.js/,
            parallel: true,
            cache: true,
            sourceMap: false,
            compress: {
              arrows: false,
              booleans: false,
              cascade: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              if_return: false,
              inline: false,
              join_vars: false,
              keep_infinity: true,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              sequences: false,
              side_effects: false,
              switches: false,
              top_retain: false,
              toplevel: false,
              typeofs: false,
              unused: false,

              // Switch off all types of compression except those needed to convince
              // react-devtools that we're using a production build
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: true
          }
        })
      )
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          minify: true,
          forceDelete: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/
            }
          ]
        })
      )
    }

    return config
  }
}
