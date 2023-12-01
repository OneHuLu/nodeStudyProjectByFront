import React from "react";
import "./product.less";
import { NavLink, useLocation } from "react-router-dom";

export default function Product() {
  const {
    state: { item },
  } = useLocation();
  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>
      <figure className="product">
        <div className="product__organic {%NOT_ORGANIC%}">
          <h5>Organic</h5>
        </div>
        <NavLink to="/" className="product__back">
          <span className="emoji-left">👈</span>Back
        </NavLink>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--2">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--3">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--4">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--5">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--6">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--7">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--8">
            {item?.image}
          </span>
          <span className="product__emoji product__emoji--9">
            {item?.image}
          </span>
        </div>
        <h2 className="product__name">{item?.productName}</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍</span>From {item?.from}
          </p>
          <p>
            <span className="emoji-left">❤️</span>
            {item?.nutrients}
          </p>
          <p>
            <span className="emoji-left">📦</span>
            {item?.quantity}
          </p>
          <p>
            <span className="emoji-left">🏷</span>
            {item?.price}€
          </p>
        </div>
        <a href="" className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card ({item?.price}€)</span>
        </a>

        <p className="product__description">{item?.description}</p>
      </figure>
    </div>
  );
}
