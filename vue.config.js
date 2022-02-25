
module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: '/',
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
