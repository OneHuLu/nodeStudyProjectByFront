import React, { useEffect, useState } from "react";
import { getAllTours } from "./content";
import ContentSkeleton from "page/skeleton/content-skeleton";
import Tour from "./component/tour";

export default function Content() {
  const [tourList, setTourList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    getAllDate();
    return () => setLoading(false);
  }, []);

  const getAllDate = async () => {
    const { data } = (await getAllTours()) || {};
    setTourList(data);
    setLoading(true);
  };
  return <>{loading ? <Tour tourList={tourList} /> : <ContentSkeleton />}</>;
}
