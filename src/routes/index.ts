import Content from "../page/content";
import Tour from "../page/tour";
const router = [
  // 首页内容
  {
    path: "/",
    element: Content,
  },
  // /tour 旅游详情页面
  {
    path: "/tour",
    element: Tour,
  },
];
export { router };
