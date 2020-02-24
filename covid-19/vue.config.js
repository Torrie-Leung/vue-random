module.exports = {
  //avoid eslint's default error
  lintOnSave: false,
  devServer:{
    proxy: {
      changeOrigin: true
    }
  }
}