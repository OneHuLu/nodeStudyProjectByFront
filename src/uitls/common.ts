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
    return true;
  } else {
    return false;
  }
};

export { isLogin, logout };
