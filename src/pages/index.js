import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
    return (
    <div>
        <h1>Hello world!</h1>
        <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link to={node.fields.slug} css={{ textDecoration: `none`, color: `inherit` }}>
              {node.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
    )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
