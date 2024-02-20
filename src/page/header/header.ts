import { message as Message } from "antd";
import { Fetch } from "@utils/Fetch";
import { setTourList } from "page/content/reducers/index-reducer";

const handleKeyDown = async (
  event: any,
  search: string,
  dispatch: Function
) => {
  // 判断按下的键是否是回车键（keyCode 13 或者 key "Enter"）
  if (event.key === "Enter" || event.keyCode === 13) {
    const { status, data, message } = await Fetch("/tours/searchTour", {
      method: "POST",
      body: {
        name: search,
      },
    });
    if (status === 200) {
      dispatch(setTourList(data));
    } else {
      Message.error(message);
    }
  }
};

export { handleKeyDown };
