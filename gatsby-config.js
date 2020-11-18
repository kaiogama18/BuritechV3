const siteMetadata = require('./config/metadata')
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Buritech`,
        short_name: `Buritech`,
        description: `Nossa lema é desenvolver soluções tecnológicas da Amazônia para o Mundo`,
        lang: `pt-br`,
        start_url: `/`,
        background_color: `#520003`,
        theme_color: `#520003`,
        display: `standalone`,
        icon: 'src/assets/icon.png'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV != 'production'
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    `gatsby-plugin-offline`
  ],
}
