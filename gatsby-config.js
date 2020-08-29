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
      name: `Jeremy Soong`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `An opinionated starter for Gatsby`,
    url: `https://something.or.other`,
    logo: `/logo.png`,
    twitter: `mor10`,
    // social
    socialLinks: [
      {
        icon: "fa-github",
        name: "Github",
        url: "https://github.com/anubhavsrivastava",
      },
      {
        icon: "fa-twitter",
        name: "Twitter",
        url: "https://twitter.com/onlyanubhav",
      },
      {
        icon: "fa-facebook",
        name: "Facebook",
        url: "https://facebook.com/theanubhav",
      },
      {
        icon: "fa-envelope-o",
        name: "Email",
        url: "mailto:anubhav.srivastava00@gmail.com",
      },
    ],
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
