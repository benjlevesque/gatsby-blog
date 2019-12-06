import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../layouts";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default ({ data }: IndexPageProps) => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong>{" "}
        site.
      </p>
      <p>
        Check the <Link to="/blog/">blog</Link>
      </p>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
