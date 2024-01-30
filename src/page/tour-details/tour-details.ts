import { Fetch } from "@utils/Fetch";
/**
 * 旅游详情页数据获取
 * @param id
 * @param dispatch
 */
const getTourDetails = async (tourId: string, dispatch: any) => {
  const { status, data } = await Fetch(`/tours/tour-detail/${tourId}`);
  if (status === "success") {
    dispatch({
      type: "tour-details/saveData",
      payload: {
        key: "tourDetails",
        value: data,
      },
    });
  } else {
    console.log("Fetch Failed");
  }
};

export { getTourDetails };
