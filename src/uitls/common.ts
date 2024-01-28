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
export { isLogin };
