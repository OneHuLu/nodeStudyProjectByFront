import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// router
import { router } from "../routes/index";
import Header from "./header";
import Footer from "./footer";

export default function Index() {
  // 设置标题
  useEffect(() => {
    document.title = "Natours | All Tours";
  }, []);

  return (
    <Router>
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
    </Router>
  );
}
