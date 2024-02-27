import React from "react";
import { useSelector } from "react-redux";
// Components
import SectionHeader from "./section-header";
import SectionDescription from "./section-description";
import SectionPictures from "./section-pictures";
import SectionMap from "./section-map";
import SectionReviews from "./section-reviews";
import SectionCta from "./section-cta";

export default function TourDetailsComponents() {
  // state
  const { tourDetails } = useSelector((state: any) => state.tourDetails);
  const {
    name,
    duration,
    startLocation,
    startDates,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    images,
    guides,
    description,
    reviews,
    locations,
  } = tourDetails;
  return (
    <>
      <SectionHeader
        name={name}
        duration={duration}
        startLocation={startLocation}
      />

      <SectionDescription
        startDates={startDates}
        difficulty={difficulty}
        maxGroupSize={maxGroupSize}
        ratingsAverage={ratingsAverage}
        guides={guides}
        name={name}
        description={description}
      />

      <SectionPictures images={images} name={name} />

      <SectionMap locations={locations} />

      <SectionReviews reviews={reviews} />

      <SectionCta images={images} />
    </>
  );
}
