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
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },
  css: [
    '@/assets/main.scss',
    '@/assets/index.css',
    { src: 'modern-css-reset' },
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: 'vue-material/dist/theme/default.css', lang: 'css' },
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
    extend(config, { isDev, isClient }) {
      const isProd = !isDev;

      if (isClient) {
        config.optimization.splitChunks.chunks = 'all';

        if (isDev) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue|ts)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          });
        }

        if (isProd) {
          config.optimization.minimize = true;
          config.optimization.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),
          ];
        }
      }
    },
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: false,
    },
    transpile: [
      /typed-vuex/,
    ],
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  plugins: [
    '@/plugins/composition-api',
    '@/plugins/vuelidate.ts',
    '@/plugins/vue-material',
    '@/plugins/filters.js',
  ],
  modules: ['@nuxtjs/toast'],
  toast: {
    position: 'top-center',
    register: [
      {
        name: 'my_message',
        message: payload => payload.message,
        options: {
          type: 'info',
          theme: 'bubble',
          duration: 3500,
        },
      },
    ],
  },
};
