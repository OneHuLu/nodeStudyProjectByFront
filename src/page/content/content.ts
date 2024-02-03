import { format } from "date-fns";
import { Fetch } from "@utils/Fetch";

/**
 * 阻止原生事件
 * @param event
 * @returns
 */
const labelPrevent = (event: any) => event.preventDefault();

/**
 * 获取 tour 列表数据
 * @returns
 */
const getAllTours = async (dispatch: Function) => {
  const { status, data } = (await Fetch("/tours")) || {};
  if (status === 200) {
    dispatch({
      type: "content/saveData",
      payload: {
        key: "tourList",
        value: data,
      },
    });
  }
};

/**
 * 字符转第一个字母大写
 * @param text
 * @returns
 */
const textToUpperCase = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

/**
 * 时间转换 =>  Jan 2024
 * @param startDates
 * @returns
 */
const startDatesChange = (startDates: any) => format(startDates[0], "LLL yyyy");

export { labelPrevent, getAllTours, textToUpperCase, startDatesChange };
