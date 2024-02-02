import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isLogin, logout } from "@utils/common";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.myAccount);
  const [user, setUser]: any = useState({});
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
        {isLogin() && (
          <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
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
              {/* My bookings */}
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
                src={`/img/users/${user?.photo}`}
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
