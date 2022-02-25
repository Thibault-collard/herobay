
module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: '/',
    devServer: {
      proxy: {
        '/api*': {
          target: 'http://localhost:8000/',
        }
      }
    }
  }
