module.exports = {
  siteMetadata: {
    title: "Cambridge Metalsmiths",
    description:
      "Serving Cast Aluminum Signage to Cambridge and Beyond for Over 20 Years",
    author: "@iamstevedavis",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cambridge-Metalsmiths",
        short_name: "CambridgeMetalsmiths",
        start_url: "",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
