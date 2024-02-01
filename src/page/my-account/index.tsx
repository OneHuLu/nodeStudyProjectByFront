import React, { useState } from "react";
import {
  adminNav,
  sideNav,
  updatePassword,
  updateUserInfo,
} from "./my-account";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyAaccount() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  // 获取user信息
  const getUserData = localStorage.getItem("user") || "";
  if (!getUserData) {
  }
  const user = (getUserData && JSON.parse(getUserData)) || {};
  // hover sign
  const [sideNavNum, setSideNavNum] = useState(0);
  // selectsign
  const [selectSideNavNum, setSelectSideNavNum] = useState(0);
  //userName
  const [userName, setUserName] = useState(user?.name);
  //userEmail
  const [userEmail, setuserEmail] = useState(user?.email);
  // Current password
  const [currentPassword, setCurrentPassword] = useState("");
  // New password
  const [newPassword, setNewPassword] = useState("");
  // Confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="user-view">
      <nav className="user-view__menu">
        {user?.role !== "admin" ? (
          <ul className="side-nav" onMouseLeave={() => setSideNavNum(-1)}>
            {sideNav?.map((item, index) => (
              <li
                className={
                  sideNavNum === index || selectSideNavNum === index
                    ? "side-nav--active"
                    : ""
                }
                key={index}
                onMouseEnter={() => setSideNavNum(index)}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectSideNavNum(index);
                }}
              >
                <a href="##">
                  <svg>
                    <use xlinkHref={`/img/icons.svg#icon-${item?.icon}`}></use>
                  </svg>
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="admin-nav">
            <h5 className="admin-nav__heading">Admin</h5>
            <ul className="side-nav" onMouseLeave={() => setSideNavNum(-1)}>
              {adminNav?.map((item, index) => (
                <li
                  key={index}
                  className={
                    sideNavNum === sideNav.length + index ||
                    selectSideNavNum === sideNav.length + index
                      ? "side-nav--active"
                      : ""
                  }
                  onMouseEnter={() => setSideNavNum(sideNav.length + index)}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectSideNavNum(sideNav.length + index);
                  }}
                >
                  <a href="##">
                    <svg>
                      <use xlinkHref={`img/icons.svg#icon-${item?.icon}`}></use>
                    </svg>
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form className="form form-user-data">
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
                required
              />
            </div>

            <div className="form__group form__photo-upload">
              <img
                className="form__user-photo"
                src={`/img/users/${user?.photo}`}
                alt="Userphoto"
              />
              <a className="btn-text" href="##" type="file">
                Choose new photo
              </a>
            </div>

            <div className="form__group right">
              <button
                className="btn btn--small btn--green"
                onClick={async (e) => {
                  e.preventDefault();
                  await updateUserInfo(userName, userEmail, dispatch);
                }}
              >
                Save settings
              </button>
            </div>
          </form>
        </div>

        <div className="line">&nbsp;</div>

        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form className="form form-user-settings">
            <div className="form__group">
              <label className="form__label" htmlFor="password-current">
                Current password
              </label>
              <input
                id="password-current"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="password">
                New password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form__group ma-bt-lg">
              <label className="form__label" htmlFor="password-confirm">
                Confirm password
              </label>
              <input
                id="password-confirm"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="form__group right">
              <button
                className="btn btn--small btn--green"
                onClick={async (e) => {
                  e.preventDefault();
                  const status = await updatePassword(
                    currentPassword,
                    newPassword,
                    confirmPassword
                  );
                  status && navigator("/login");
                }}
              >
                Save password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
