import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isLogin, logout } from "@utils/common";
import { useDispatch, useSelector } from "react-redux";
import { handleKeyDown } from "./header";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: any) => state.myAccount);
  const [user, setUser]: any = useState({});
  const [search, setSearch]: any = useState("");

  const getUser = localStorage.getItem("user") || "";

  useEffect(() => {
    const user = (getUser && JSON.parse(getUser)) || userInfo;
    setUser(user);
    return () => {
      setUser({});
    };
  }, [userInfo, getUser]);
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a
          href="##"
          className="nav__el"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
        >
          All tours
        </a>
        {isLogin() && location.pathname === "/" && (
          <form className="nav__search">
            <button
              className="nav__search-btn"
              onClick={(e) => e.preventDefault()}
            >
              <svg>
                <use xlinkHref="img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, search, dispatch)}
            />
          </form>
        )}
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {isLogin() ? (
          <>
            <a
              href="###"
              className="nav__el"
              onClick={async (event) => {
                event.preventDefault();
                const logoutStatus = await logout();
                if (logoutStatus) {
                  navigate("/");
                }
              }}
            >
              LOG OUT
            </a>
            <a
              href="##"
              className="nav__el"
              onClick={(event) => {
                event.preventDefault();
                navigate("/mine");
              }}
            >
              <img
                src={user?.photo}
                alt="UserPhoto"
                className="nav__user-img"
              />
              <span>{user?.name}</span>
            </a>
          </>
        ) : (
          <>
            <button
              className="nav__el"
              onClick={(event) => {
                event.preventDefault();
                navigate("/login");
              }}
            >
              Log in
            </button>
            <button
              className="nav__el nav__el--cta"
              onClick={(event) => {
                event.preventDefault();
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
