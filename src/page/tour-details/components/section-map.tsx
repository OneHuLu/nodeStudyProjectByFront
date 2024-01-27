/* eslint-disable */
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function SectionMap(props: any) {
  const { locations } = props;

  useEffect(() => {
    mapboxgl.accessToken = accessTokenMap;

    const map = new mapboxgl.Map({
      container: "map",
      style: mapStyle,
      scrollZoom: false,
    });

    map.on("load", function () {
      const bounds = new mapboxgl.LngLatBounds();

      locations?.map((marker: any) => {
        // 创建标记
        const el = document.createElement("div");
        el.className = "marker";

        // 添加标记
        new mapboxgl.Marker({
          element: el,
          anchor: "bottom",
        })
          .setLngLat(marker.coordinates)
          .addTo(map);

        // 添加弹框
        new mapboxgl.Popup({
          offset: 30,
          closeOnClick: true,
        })
          .setLngLat(marker.coordinates)
          .setHTML(`<p> Day:${marker.day} ${marker.description}</p>`)
          .addTo(map);

        // 扩展地图边界包括当前位置
        bounds.extend(marker.coordinates);
      });
      map.fitBounds(bounds, {
        padding: {
          top: 200,
          bottom: 150,
          left: 100,
          right: 100,
        },
      });
      // 绘制路线
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: locations.map((item: any) => item.coordinates),
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#55c57a",
          "line-opacity": 0.6,
          "line-width": 3,
        },
      });
    });

    // 在组件销毁时清理地图
    return () => {
      map.remove();
    };
  }, [locations]);
  return (
    <section className="section-map">
      <div id="map"></div>
    </section>
  );
}
