module.exports = {
  /* Site css */
  css: [
    { src: '~/assets/app.css' }
  ],

  /* Headers of the page */
  head: {
    title: 'User, Worker, Owner: May 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'User, Worker, Owner' },
      { property: 'og:title', content: 'User, Worker, Owner—Bringing Democracy to Work' },
      { property: 'og:url', content: 'http://uwo.fyi' },
      { property: 'og:description', content: 'For people participating in tech to bring their values to their workplaces and platforms.'},
      { property: 'og:img', content: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1908563/uwo-twitter.png' },
      { name:'twitter:card' content: 'summary' },
      { name:'twitter:image' content: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1908563/uwo-twitter.png' },
      { name:'twitter:site' content: '@uwofyi' },
      { name:'twitter:title' content: 'User, Worker, Owner—Bringing Democracy to Work' },
      { name:'twitter:description' content: 'For people participating in tech to bring their values to their workplaces and platforms.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fortune-css/dist/fortune.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Coustard:400,900' }
    ]
  },
  /* Customize the progress bar color */
  loading: { color: 'var(--state-primary)' },

  /* Build configuration*/
  build: {
    postcss: {
      plugins: {
      'postcss-cssnext': {
        features: {
          rem: false,
          customProperties: false
          }
        }
      }
    },

    /* Run ESLint on save */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
