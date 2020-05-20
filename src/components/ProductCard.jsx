import React from "react";
import { css } from "emotion";
import { Link } from "gatsby";

const ProductCard = (props) => {
  const productCardStyle = css`
    & {
      width: 200px;
      height: 250px;
    }

    & > a {
      text-decoration: none;
    }

    & > a > img {
      height: 150px;
      object-fit: cover;
    }

    & > a > h3 {
      font-size: 1rem;
      margin: 0;
      line-height: 1.3;
    }
  `;

  const price = css`
    font-size: 0.75rem;
    margin: 0;
  `;

  const discount = css`
    color: green;
    margin-left: 10px;
  `;

  const strokePrice = css`
    text-decoration: none;
    color: red;
  `;

  return (
    <li className={productCardStyle}>
      <Link to={"/" + props.slug}>
        <img src={props.img} alt="Product Image" />
        <h3>{props.title}</h3>
        <p>
          DKK:
          {
            <span className={price.discount ? strokePrice : null}>
              {" " + props.price}
            </span>
          }
          {props.discount ? (
            <span className={discount}>{props.discount}</span>
          ) : null}
        </p>
      </Link>
    </li>
  );
};

export default ProductCard;
