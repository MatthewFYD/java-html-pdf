const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env: {
    NODE_ENV: process.env.NODE_ENV || "dev"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~plugins/filters.js' ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // config.module.rules = config.module.rules.filter(item => item.test.toString() !== "/\\.(png|jpe?g|gif|svg|webp)$/" && item.test.toString() !== "/\\.(woff2?|eot|ttf|otf)(\\?.*)?$/")
      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   loader: 'url-loader',
      //   query: {
      //     limit: 50000000,
      //     name: 'img/[name].[hash:7].[ext]'
      //   }
      // });
      // config.module.rules.push({
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   query: {
      //     limit: 50000000,
      //     name: 'fonts/[name].[hash:7].[ext]'
      //   }
      // });

      // config.module.rules.push({
      //   test: /\.less$/,
      //   loader: "style-loader!css-loader!less-loader",
      // });
    }
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  }
}
