import React, { useState } from "react";
import { Nav, SideNavType } from "../type";

export default function SideNav(props: SideNavType) {
  const { nav, setComponent } = props;
  // useState
  const [sideNavNum, setSideNavNum] = useState<number>(0); // hover sign
  const [selectSideNavNum, setSelectSideNavNum] = useState<number>(0); // selectsign

  return (
    <ul className="side-nav" onMouseLeave={() => setSideNavNum(-1)}>
      {nav?.map((item: Nav, index: any) => (
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
            item?.component && setComponent(item?.component);
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
  );
}
