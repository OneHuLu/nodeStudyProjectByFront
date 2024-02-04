import { message } from "antd";
import { Fetch } from "./Fetch";

/**
 * 是否登录
 * @returns
 */
const isLogin = () => {
  // 判断是否登录
  const token = localStorage.getItem("token");
  if (token) {
    // 用户已登录
    return true;
  } else {
    // 用户未登录
    return false;
  }
};

/**
 * 退出登录
 */
const logout = async () => {
  const { status } = await Fetch("/users/logout");
  if (status === 200) {
    localStorage.clear();
    message.info("logged out successfully!");
    return true;
  } else {
    message.error("logged out failed! Please try again!");
    return false;
  }
};
/**
 * 将文件内容转换为 base64 编码
 * @param file
 * @returns
 */
const readFileAsBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      // 读取成功，将结果传递给 resolve
      resolve(event?.target.result.split(",")[1]);
    };

    reader.onerror = (error) => {
      // 读取失败，将错误传递给 reject
      reject(error);
    };

    // 开始读取文件
    reader.readAsDataURL(file);
  });
};
export { isLogin, logout, readFileAsBase64 };
