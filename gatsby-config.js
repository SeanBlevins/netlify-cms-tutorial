module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/blog`,
              name: "markdown-pages",
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/press`,
              name: 'press',
            },
          },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
    ],
  };