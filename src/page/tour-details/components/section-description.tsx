import React from "react";
import { format } from "date-fns";

export default function SectionDescription(props: any) {
  const {
    startDates,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    guides,
    name,
    description,
  } = props;

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

            {overviewBoxDetail(
              startDates,
              difficulty,
              maxGroupSize,
              ratingsAverage
            )?.map((item, index) => (
              <div className="overview-box__detail" key={index}>
                <svg className="overview-box__icon">
                  <use xlinkHref={`/img/icons.svg#icon-${item.svgName}`}></use>
                </svg>
                <span className="overview-box__label">{item?.key}</span>
                <span className="overview-box__text">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {guides?.map((item: any, index: number) => (
              <div className="overview-box__detail" key={index}>
                <img
                  src={`/img/users/${item?.photo}`}
                  alt={item?.name}
                  className="overview-box__img"
                />
                <span className="overview-box__label">
                  {getRole(item?.role)}
                </span>
                <span className="overview-box__text">{item?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {name}tour</h2>
        {createDescriptionText(description)}
      </div>
    </section>
  );
}

const overviewBoxDetail = (
  startDates: string,
  difficulty: string,
  maxGroupSize: number,
  ratingsAverage: string
) => {
  const data = [
    {
      key: "Next date",
      value: startDates && format(startDates[0], "LLL yyyy"),
      svgName: "calendar",
    },
    {
      key: "Difficulty",
      value: difficulty,
      svgName: "trending-up",
    },
    {
      key: "Participants",
      value: `${maxGroupSize} people`,
      svgName: "user",
    },
    {
      key: "Rating",
      value: `${ratingsAverage} / 5`,
      svgName: "star",
    },
  ];
  return data;
};

const getRole = (role: string) => {
  if (role === "lead-guide") {
    return "Lead guide";
  } else if (role === "guide") {
    return "Tour guide";
  }
};
const createDescriptionText = (description: string) => {
  const parapraphs = description?.split("\n");
  return parapraphs?.map((item: string, index: number) => (
    <p className="description__text" key={index}>
      {item}
    </p>
  ));
};
