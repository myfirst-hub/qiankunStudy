module.exports = {
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.port = 2000
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      return config
    }
  },
  webpack: (config) => {
      config.output = {
      library: 'vueApp',
      libraryTarget: 'umd',
      publicPath: 'http://localhost:2000/'
    }
    return config
  }
}
