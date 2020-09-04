const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    publicPath: './',

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@js', resolve('src/assets/js'))
            .set('@css', resolve('src/assets/css'))
            .set('@images', resolve('src/assets/images'))
            .set('@icons', resolve('src/assets/icons'))
            .set('@lang', resolve('src/assets/lang'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@apis', resolve('src/apis'))
    },

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: false
      }
    },

    transpileDependencies: [
      'quasar'
    ]
};
