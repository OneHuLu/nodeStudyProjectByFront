import React from "react";
import UseMapBoxHooks from "../../../uitls/map/mapBox";

export default function SectionMap(props: any) {
  const { locations } = props;
  if (mapName === "mapbox") {
    UseMapBoxHooks({ locations });
  }
  return (
    <section className="section-map">
      <div id="map"></div>
    </section>
  );
}
