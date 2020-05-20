import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";

class Products extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.sitemMetadata.title");
    const categories = get(this, "props.data.allContentfulCategory.nodes");

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Categories</h1>
        <ul>
          {categories.map((category) => (
            <li>
              <Link to={"Categories/" + category.name}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default Products;
export const productQuery = graphql`
  query categoryQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulCategory {
      nodes {
        name
      }
    }
  }
`;
