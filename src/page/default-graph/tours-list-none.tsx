import React from "react";
import { Image } from "antd";

import "./tours-list-none.less";

export default function ToursListNone() {
  return (
    <div className="tours-list-none">
      <Image src="/img/que-sheng-tu.png" preview={false} className="image" />
      <span>似乎没有了~</span>
    </div>
  );
}
