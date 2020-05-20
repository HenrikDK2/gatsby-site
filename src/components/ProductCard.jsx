import React from "react";
import { css } from "emotion";
import { Link } from "gatsby";

const ProductCard = (props) => {
  const imgStyle = css`
    height: 150px;
    object-fit: cover;
  `;

  const h3Style = css`
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: -moz-box;
    -webkit-line-clamp: 3;
    -moz-line-clamp: 3;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
  `;

  const linkStyle = css`
    text-decoration: none;
  `;

  const pStyle = css`
    vertical-align: bottom;
    display: inline-block;
    margin: 0;
  `;

  return (
    <li>
      <Link className={linkStyle} to={"/" + props.slug}>
        <img className={imgStyle} src={props.img} alt="Product Image" />
        <h3 className={h3Style}>{props.title}</h3>
        <p className={pStyle}>
          {props.discount ? "Før " : ""} DKK: <span>{props.price}</span>
        </p>

        {props.discount ? (
          <p>
            Ny DKK: <span>{props.discount}</span>
          </p>
        ) : null}
      </Link>
    </li>
  );
};

export default ProductCard;
