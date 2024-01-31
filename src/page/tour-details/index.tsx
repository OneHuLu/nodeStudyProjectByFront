import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTourDetails } from "./tour-details";
// Components
import SectionHeader from "./components/section-header";
import SectionDescription from "./components/section-description";
import SectionPictures from "./components/section-pictures";
import SectionMap from "./components/section-map";
import SectionReviews from "./components/section-reviews";
import SectionCta from "./components/section-cta";

export default function Tour() {
  // 获取url传参
  const location = useLocation();
  const { state, pathname } = (location?.state && location) || {};
  const tourDetailName = pathname?.split("/")[2]?.replace(/-/g, " ");
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Natours | ${tourDetailName} Tour`;
  }, [tourDetailName]);

  // 获取数据
  useEffect(() => {
    getTourDetails(state?.tourId, dispatch);
  }, [dispatch, state?.tourId]);

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
  // 数据组装

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
