const pkg = require('./package');
require('dotenv').config();

module.exports = {
    mode: 'universal',
    head: {
        title: pkg.name,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://use.typekit.net/snp0cke.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
    },
    loading: { color: '#2f9e44' },
    css: [{ src: '@/assets/scss/index.scss', lang: 'scss' }],
    plugins: ['@/plugins'],
    modules: [
        '@nuxtjs/axios',
        [
            'nuxt-sass-resources-loader',
            [
                '@/assets/scss/settings/_settings.variables.scss',
                '@/assets/scss/tools/_tools.bem.scss',
                '@/assets/scss/tools/_tools.responsive.scss'
            ]
        ]
    ],
    env: {
        ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
        ALGOLIA_APPLICATION_KEY: process.env.ALGOLIA_APPLICATION_KEY,
        BASE_URL: process.env.BASE_URL
    },
    axios: {
        baseURL: process.env.BASE_URL
    },
    build: {
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
