module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/blog`,
              name: "markdown-pages",
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/content/press`,
              name: 'press',
            },
          },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
    ],
  };