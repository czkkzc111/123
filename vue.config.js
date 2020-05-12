const path = require('path')
const name = 'Vue Typescript Admin'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
  },

  devServer: {
  	// open: true,
  	// host: 'localhost',
  	// port: 8080,
  	// https: false,
  	proxy: {
  		'/api': {
  			target: 'http://127.0.0.1:1087/',
  			// 允许跨域
  			changeOrigin: true,
  			ws: true,
  			pathRewrite: {
  				'^/api': ''
  			}
  		}
  	}
  }
}
