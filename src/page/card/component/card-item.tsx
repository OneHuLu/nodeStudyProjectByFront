import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardItem(props: any) {
  let navigate = useNavigate();
  const { item, index } = props;
  return (
    <figure className="card" key={index}>
      <div className="card__emoji">{item?.image}</div>
      <div className="card__title-box">
        <h2 className="card__title">{item?.productName}</h2>
      </div>

      <div className="card__details">
        <div
          className={`card__detail-box ${!item?.organic ? "not-organic" : {}}`}
        >
          <h6 className="card__detail card__detail--organic">Organic!</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail">{item?.quantity} per 📦</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{item?.price}€</h6>
        </div>
      </div>

      <a
        href=""
        className="card__link"
        onClick={() => navigate(`/product`, { state: { item } })}
      >
        <span>
          Detail <i className="emoji-right">👉</i>
        </span>
      </a>
    </figure>
  );
}
