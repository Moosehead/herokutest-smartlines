const pkg = require('./package');
require('dotenv').config();

module.exports = {
    mode: 'universal',
    head: {
        title: 'SMARTLINESS',
        titleTemplate: 'SMARTLINES | %s',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { name: 'msapplication-TileColor', content: '#dd5f13' },
            { name: 'theme-color', content: '#ffffff' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://use.typekit.net/snp0cke.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#dd5f13' },
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
