import React from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "@utils/common";

export default function SectionCta(props: any) {
  const navigate = useNavigate();
  const { images, duration } = props;
  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img
          src={`/img/tours/${images?.[1]}`}
          alt="TourPicture"
          className="cta__img cta__img--1"
        />
        <img
          src={`/img/tours/${images?.[2]}`}
          alt="TourPicture"
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          {/* TODO: 预定 */}
          {isLogin() ? (
            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          ) : (
            <button
              className="btn btn--green span-all-rows"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Log in to book tour
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
