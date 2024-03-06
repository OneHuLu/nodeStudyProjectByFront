import React from "react";
import "./content-skeleton.less";

export default function ContentSkeleton() {
  const emptyArray = Array.from({ length: 6 });

  return (
    <main className="main">
      <div className="card-container skeleton">
        {emptyArray.map((_, index) => (
          <div className="card" key={index}>
            <div className="skeleton-card__header">
              <div className="card__picture ">
                <div className="skeleton-card__picture-overlay">&nbsp;</div>
                <div className="skeleton-card__picture-img"></div>
              </div>
            </div>

            <div className="card__details skeleton-card__details">
              <h4 className="skeleton-card__sub-heading">&nbsp;</h4>
              <p className="skeleton-card__text"></p>
              <div className="skeleton-card__data">
                <svg className="skeleton-card__icon"></svg>
                <span className="skeleton-text"></span>
              </div>
              <div className="skeleton-card__data">
                <svg className="skeleton-card__icon"></svg>
                <span className="skeleton-text"></span>
              </div>
              <div className="skeleton-card__data">
                <svg className="skeleton-card__icon"></svg>
                <span className="skeleton-text"></span>
              </div>
              <div className="skeleton-card__data">
                <svg className="skeleton-card__icon"></svg>
                <span className="skeleton-text"></span>
              </div>
            </div>

            <div className="card__footer">
              <p>
                <span className="skeleton-card__footer-value"></span>
                <span className="skeleton-card__footer-text"></span>
              </p>
              <p className="card__ratings skeleton-card__ratings">
                <span className="card__footer-value skeleton-card__footer-value">
                  &nbsp;
                </span>
                <span className="card__footer-text skeleton-card__footer-text">
                  &nbsp;
                </span>
              </p>
              <a
                href="##"
                onClick={(e) => e.preventDefault()}
                className="btn btn--green btn--small skeleton-card__btn"
              >
                &nbsp;
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
