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
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/portfolio`,
            name: 'portfolio',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/images`,
            name: 'images',
          },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify-cms`,
    ],
  };