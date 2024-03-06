import React from "react";
import { useSelector } from "react-redux";
import ToursListNone from "page/default-graph/tours-list-none";
import TourItem from "./tour-item";

export default function Tour() {
  const { tourList } = useSelector((state: any) => state.content);

  return (
    <main className="main">
      {!!tourList.length ? <TourItem tourList={tourList} /> : <ToursListNone />}
    </main>
  );
}
