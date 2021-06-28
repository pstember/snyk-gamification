module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: 'https://snyk.io',
        ws: true,
        changeOrigin: true,
        toProxy: true
      }
    }
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Snyk Insights";
            return args;
        })
  }  
}