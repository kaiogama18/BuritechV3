/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata')

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/assets/icon.png' 
      },
    },
    `gatsby-plugin-offline`
  ],
}
