const path = require('path');
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    outputDir: './dist/',
    assetsDir: path.resolve(__dirname, './dist/static/'),
    publicPath: IS_PRODUCTION ? 'herobay.herokuapp.com': '/',
    // For Production, replace set baseUrl to CDN
    // And set the CDN origin to `yourdomain.com/static`
    // Whitenoise will serve once to CDN which will then cache
    // and distribute
    devServer: {
      proxy: {
        '/api*': {
          target: 'http://localhost:8000/',
        }
      }
    }
  }
