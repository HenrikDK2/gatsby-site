import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ProductCard from "../components/ProductCard";
import { css } from "emotion";

class Products extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.sitemMetadata.title");
    const posts = get(this, "props.data.allContentfulProdukt.nodes");
    const listStyle = css`
      list-style: none;
      padding: none;
      display: grid;
      grid-template-columns: repeat(4, 200px);
      grid-auto-rows: 250px;
      place-content: center;
      column-gap: 20px;
      row-gap: 50px;
    `;
    console.log("posts", posts);

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>All Products</h1>
        <ul className={listStyle}>
          {posts.map((product, i) => (
            <ProductCard
              key={product.sku}
              title={product.name}
              sku={product.sku}
              desc={product.desc}
              price={product.price}
              discount={product.discount}
              img={product.image[0].fluid.src}
              slug={product.slug}
            />
          ))}
        </ul>
      </Layout>
    );
  }
}

export default Products;
export const productQuery = graphql`
  query productsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulProdukt {
      nodes {
        stock
        slug
        sku
        price
        name
        image {
          fluid {
            src
          }
        }
        discount
        desc
        category {
          name
        }
      }
    }
  }
`;
