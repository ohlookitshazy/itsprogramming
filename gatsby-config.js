module.exports = {
  pathPrefix: "/gatsby-gp",
  siteMetadata: {
    title: "itsprogramming",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {}
          },
          {
            resolve: `gatsby-remark-images`,
            options: {}
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
