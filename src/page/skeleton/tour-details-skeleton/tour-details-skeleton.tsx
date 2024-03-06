import React from "react";
import "./tour-details-skeleton.less";
export default function TourDetailsSkeleton() {
  return (
    <div className="tour-details-skeleton">
      {/* header */}
      <section className="section-header skeleton">
        <div className="heading-box ">
          <h1 className="heading-primary run">
            <div className="big-text"></div>
          </h1>
          <div className="heading-box__group-skeleton">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="img/icons.svg#icon-clock"></use>
              </svg>
              <span className="heading-box__text run"></span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="img/icons.svg#icon-map-pin"></use>
              </svg>
              <span className="heading-box__text run"></span>
            </div>
          </div>
        </div>
      </section>
      {/* des */}
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="line-skeleton run"></h2>

              {Array.from({ length: 4 })?.map((item, index) => (
                <div
                  className="overview-box__detail run  long-skeleton"
                  key={index}
                ></div>
              ))}
            </div>

            <div className="overview-box__group">
              <h2 className="line-skeleton run"></h2>
              {Array.from({ length: 3 })?.map((item: any, index: number) => (
                <div
                  className="overview-box__detail run  long-skeleton"
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="line-skeleton run"></h2>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-skeleton run"></div>
          <div className="long-context-shot-skeleton run"></div>
        </div>
      </section>
      {/* pic */}
      <section className="section-pictures">
        {Array.from({ length: 4 })?.map((item, index) => (
          <div className="picture-box" key={index}>
            <div
              className={`picture-box__img picture-box__img--${index + 1} pic-h-w run`}
            />
          </div>
        ))}
      </section>
      {/* map */}
      <section className="section-map run">
        <div id="map"></div>
      </section>
      {/* revi */}
      <section className="section-reviews skeleton">
        <div className="reviews">
          {Array.from({ length: 3 })?.map((item: any, index: number) => (
            <div className="reviews__card" key={index}>
              <div className="reviews__avatar">
                <div className="reviews__avatar-img round run" />
                <h6 className="reviews__user name-skeleton run"></h6>
              </div>
              <p className="reviews__text long-context-shot-skeleton run "></p>
              <div className="reviews__rating long-context-shot-skeleton run"></div>
            </div>
          ))}
        </div>
      </section>
      {/* cta */}
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo skeleton run"></div>
          <div className="cta__img cta__img--1 skeleton run" />
          <div className="cta__img cta__img--2 skeleton runs" />

          <div className="cta__content">
            <h2 className="heading-secondary long-context-skeleton run"></h2>
            <p className="cta__text long-context-skeleton run"></p>
          </div>
        </div>
      </section>
    </div>
  );
}
