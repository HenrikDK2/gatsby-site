import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Img from "gatsby-image";
import { css } from "emotion";
import Layout from "../components/layout";

class productDetails extends React.Component {
  render() {
    const ImgStyle = css`
      height: 500px;
      object-fit: cover;
    `;

    const buttonStyle = css`
      padding: 20px 100px;
      font-size: 3rem;
      margin: 20px auto;
      display: block;
      cursor: pointer;
      background: #000;
      box-sizing: border-box;
    `;
    const product = get(this, "props.data.contentfulProdukt");
    {
      console.log(product);
    }
    return (
      <Layout>
        {product.image.map((image) => (
          <Img className={ImgStyle} fluid={image.fluid} />
        ))}
        <h1>{product.name}</h1>
        <h3>{product.desc}</h3>
        <h3>{product.price}</h3>
        <h3>{product.discount}</h3>
        <button className={buttonStyle}>Køb</button>
      </Layout>
    );
  }
}

export default productDetails;
export const productQuery = graphql`
  query productQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    contentfulProdukt(slug: { eq: $slug }) {
      category
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      desc
      discount
      name
      sku
      price
      stock
    }
  }
`;
