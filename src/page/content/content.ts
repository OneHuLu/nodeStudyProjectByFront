import { format } from "date-fns";
import { Fetch } from "../../common/Fetch";

const labelPrevent = (event: any) => event.preventDefault();

/**
 * 获取 tour 列表数据
 * @returns
 */
const getAllTours = async () => {
  const tours = await Fetch("/tours");
  return tours;
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
