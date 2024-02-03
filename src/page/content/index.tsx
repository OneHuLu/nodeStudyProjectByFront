import React, { useEffect, useState } from "react";
import { getAllTours } from "./content";
import ContentSkeleton from "page/skeleton/content-skeleton";
import Tour from "./component/tour";
import { useDispatch } from "react-redux";

export default function Content() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    getAllDate();
    return () => setLoading(false);
  }, []);

  const getAllDate = async () => {
    await getAllTours(dispatch);
    setLoading(true);
  };
  return <>{loading ? <Tour /> : <ContentSkeleton />}</>;
}
