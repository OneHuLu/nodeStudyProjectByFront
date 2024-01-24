import React from "react";

export default function SectionReviews(props: any) {
  const { reviews } = props;

  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews?.map((item: any, index: number) => (
          <div className="reviews__card" key={index}>
            <div className="reviews__avatar">
              <img
                src={`/img/users/${item.user[0].photo}`}
                alt={item.user[0].name}
                className="reviews__avatar-img"
              />
              <h6 className="reviews__user">{item.user[0].name}</h6>
            </div>
            <p className="reviews__text">{item.review}</p>
            <div className="reviews__rating">{reviewsStar(+item?.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const reviewsStar = (rating: number) => {
  const tagsArray = Array.from({ length: 5 }, (_, index) => index + 1);
  return tagsArray.map((item, index) => (
    <svg
      key={index}
      className={`reviews__star reviews__star--${
        rating >= item ? "active" : "inactive"
      }`}
    >
      <use xlinkHref="/img/icons.svg#icon-star"></use>
    </svg>
  ));
};
