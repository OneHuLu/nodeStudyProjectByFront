import Content from "../page/content";
import Tour from "../page/tour-details";
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
];
export { router };
