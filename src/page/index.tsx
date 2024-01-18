import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// router
import { router } from "../routes/index";
import Header from "./header";
import Footer from "./footer";

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>Your Page Title</title>
      </Helmet>
      {/* 导航栏 */}
      <Header />
      {/* 内容 */}
      <Router>
        <Routes>
          {router.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={<item.element />} />
            );
          })}
        </Routes>
      </Router>
      {/* 页脚 */}
      <Footer />
    </div>
  );
}
