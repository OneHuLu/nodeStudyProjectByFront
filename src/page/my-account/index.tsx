import React, { useEffect, useState } from "react";
import { adminNav, sideNav } from "./my-account";

// less
import "./index.less";

// component
import SideNav from "./component/side-nav";
import Setting from "./component/setting";

export default function MyAaccount() {
  // 获取user信息
  const getUserData = localStorage.getItem("user") || "";
  const user = (getUserData && JSON.parse(getUserData)) || {};
  const [component, setComponent] = useState<string>("Setting");
  // TODO:这里会在后台搭建完成后切换为接口数据请求
  const nav = user?.role === "admin" ? adminNav : sideNav;

  return (
    <div className="user-view">
      <nav className="user-view__menu">
        <SideNav nav={nav} setComponent={setComponent} />
      </nav>

      <div className="user-view__content">
        {component === "Setting" && <Setting user={user} />}
      </div>
    </div>
  );
}
