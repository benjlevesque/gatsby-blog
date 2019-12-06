import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../layouts";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
          };
        };
      }[];
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.frontmatter.path}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const pageQuery = graphql`
  query indexQueryAndIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
