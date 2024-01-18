import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  labelPrevent,
  getAllTours,
  textToUpperCase,
  startDatesChange,
} from "./content";

export default function Content() {
  const navigate = useNavigate();
  // 事件派发方法
  const dispatch = useDispatch();
  // 获取存储仓库
  const store = useSelector((state: any) => state.content);
  const { tourList } = store.content;

  // 数据请求
  useEffect(() => {
    getAllDate();
  }, []);

  // 数据获取
  const getAllDate = async () => {
    const {
      data: { data },
    } = (await getAllTours()) || {};
    // 事件派发，更新数据
    dispatch({
      type: "content/saveData",
      payload: {
        key: "tourList",
        value: data,
      },
    });
  };
  return (
    <div>
      <main className="main">
        <div className="card-container">
          {tourList?.map((item: any, index: number) => (
            <div className="card" key={index}>
              <div className="card__header">
                <div className="card__picture">
                  <div className="card__picture-overlay">&nbsp;</div>
                  <img
                    src={`/img/tours/${item.imageCover}`}
                    alt={item.name}
                    className="card__picture-img"
                  />
                </div>

                <h3 className="heading-tertirary">
                  <span>{item?.name}</span>
                </h3>
              </div>

              <div className="card__details">
                <h4 className="card__sub-heading">{`${textToUpperCase(
                  item?.difficulty
                )} ${item?.duration}-day tour`}</h4>
                <p className="card__text">{item?.summary}</p>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-map-pin"></use>
                  </svg>
                  <span>{item?.startLocation?.description}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-calendar"></use>
                  </svg>
                  <span>{startDatesChange(item?.startDates)}</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-flag"></use>
                  </svg>

                  <span>{item?.locations?.length || 0} stops</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="img/icons.svg#icon-user"></use>
                  </svg>
                  <span>{item.maxGroupSize} people</span>
                </div>
              </div>

              <div className="card__footer">
                <p>
                  <span className="card__footer-value">
                    ${item.price}&nbsp;
                  </span>
                  <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                  <span className="card__footer-value">
                    {item.ratingsAverage}&nbsp;
                  </span>
                  <span className="card__footer-text">
                    rating ({item.ratingsQuantity})
                  </span>
                </p>
                <a
                  href="##"
                  onClick={(event) => {
                    labelPrevent(event);
                    navigate("/tour");
                  }}
                  className="btn btn--green btn--small"
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
