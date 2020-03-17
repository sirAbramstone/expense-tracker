const
  TerserWebpackPlugin = require('terser-webpack-plugin'),
  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'expense-tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  css: [
    '@/assets/main.scss',
    {src: 'modern-css-reset'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const isProd = !isDev;

      if (isClient) {
        config.optimization.splitChunks.chunks = 'all';

        if (isDev) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }

        if (isProd) {
          config.optimization.minimize = true;
          config.optimization.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()
          ];
        }
      }
    },
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: false
    },
    transpile: [
      /typed-vuex/,
    ],
  },
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  plugins: ['@/plugins/composition-api', '@/plugins/vuelidate']
}
