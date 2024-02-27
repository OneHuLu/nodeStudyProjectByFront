import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTourDetails } from "./tour-details";

// component
import TourDetailsComponents from "./components";
import TourDetailsSkeleton from "page/skeleton/loading/loading";

export default function Tour() {
  // 获取url传参
  const location = useLocation();
  const { state, pathname } = (location?.state && location) || {};
  const tourDetailName = pathname?.split("/")[2]?.replace(/-/g, " ");
  // dispatch
  const dispatch = useDispatch();
  const { tourListLoading } = useSelector((state: any) => state.tourDetails);

  useEffect(() => {
    document.title = `Natours | ${tourDetailName} Tour`;
  }, [tourDetailName]);

  // 获取数据
  useEffect(() => {
    getTourDetails(state?.tourId, dispatch);
  }, [dispatch, state?.tourId]);

  return (
    <>{tourListLoading ? <TourDetailsSkeleton /> : <TourDetailsComponents />}</>
  );
}
