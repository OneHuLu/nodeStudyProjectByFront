import Content from "../page/content";
import Tour from "../page/tour-details";
import Login from "../page/login";
import NotFound from "@utils/error/NotFound";
import MyAaccount from "page/my-account";

const router = [
  // 首页内容
  {
    path: "/",
    element: Content,
  },
  // /tour 旅游详情页面
  {
    path: "/tour/:name",
    element: Tour,
  },
  // /login 登陆页面页面
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/mine",
    element: MyAaccount,
  },
  // * 404页面
  {
    path: "*",
    element: NotFound,
  },
];
export { router };
