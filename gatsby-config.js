/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      title: `The Project`,
      titleTemplate: `%s · a starting point`,
      author: {
        name: `Morten Rand-Hendriksen`,
        summary: `a ballroom dancer playing at being a developer.`,
      },
      description: `An opinionated starter for Gatsby`,
      url: `https://something.or.other`,
      logo: `/logo.png`,
      twitter: `mor10`,
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
