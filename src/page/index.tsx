import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// router
import { router } from "../routes/index";
import Header from "./header";
import Footer from "./footer";

export default function Index() {
  const location = useLocation();

  // 设置标题
  useEffect(() => {
    document.title = "Natours | All Tours";
  }, []);

  useEffect(() => {
    // 在页面加载时将滚动条置顶
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

  return (
    <>
      {/* 导航栏 */}
      <Header />
      {/* 内容 */}
      <Routes>
        {router.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.element />} />
          );
        })}
      </Routes>
      {/* 页脚 */}
      <Footer />
    </>
  );
}
