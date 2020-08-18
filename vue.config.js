var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
var imageminMozjpeg = require('imagemin-mozjpeg')
const CompressionPlugin = require('compression-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader')
// const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch')

    // and this line
    // config.plugin('PreloadWebpackPlugin').use(PreloadWebpackPlugin)
    config.plugin('CompressionPlugin').use(CompressionPlugin)
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        progressiveImages: true
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },

  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: config => {


   if (process.env.NODE_ENV !== 'production') return

   return {
     plugins: [
       new PrerenderSpaPlugin(
         // Absolute path to compiled SPA
         path.resolve(__dirname, 'dist'),
         // List of routes to prerender
         [ '/', '/about', '/services'],
       ),
       new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        /* other ImageMin configs */
      }),
     ]
   }
 },

  transpileDependencies: ['vuetify'],
}
