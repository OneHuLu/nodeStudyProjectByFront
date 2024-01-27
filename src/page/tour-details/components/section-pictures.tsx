import React from "react";

export default function SectionPictures(props: any) {
  const { images, name } = props;
  return (
    <section className="section-pictures">
      {images?.map((item: string, index: number) => (
        <div className="picture-box" key={index}>
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={`/img/tours/${item}`}
            alt={`${name} ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
}
