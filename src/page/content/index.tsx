import React, { useEffect, useState } from "react";
import { getAllTours } from "./content";
import ContentSkeleton from "page/skeleton/content-skeleton/content-skeleton";
import Tour from "./component/tour";
import { useDispatch, useSelector } from "react-redux";

export default function Content() {
  const dispatch = useDispatch();
  const { tourListLoading } = useSelector((state: any) => state.content);

  useEffect(() => {
    getAllTours(dispatch);
    return () => {};
  }, []);

  return <>{tourListLoading ? <Tour /> : <ContentSkeleton />}</>;
}
