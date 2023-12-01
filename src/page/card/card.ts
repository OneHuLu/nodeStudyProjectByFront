import { Fetch } from "../../common/Fetch";

const getDataJson = async () => {
  const data = await Fetch("/card", {
    method: "GET",
  });
  return data;
};

export { getDataJson };
