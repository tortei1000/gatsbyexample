module.exports = {
  siteMetadata: {
    title: `Pandalalalala`,
    footer: `footer is here`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}