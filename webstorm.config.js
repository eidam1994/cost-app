const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    resolve: {
        alias: {
            '@': resolve('src'),
            '@js': resolve('src/assets/js'),
            '@css': resolve('src/assets/css'),
            '@images': resolve('src/assets/images'),
            '@icons': resolve('src/assets/icons'),
            '@lang': resolve('src/assets/lang'),
            '@components': resolve('src/components'),
            '@views': resolve('src/views'),
            '@apis': resolve('src/apis')
        }
    }
}
