import React, { useEffect, useState, useContext, createContext } from "react";
import "./index.less";
import { getDataJson } from "./card";
import CardItem from "./component/card-item";

// 创建 context
const CardContext = createContext(null) as any;

export default function Card() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // 数据获取
    dealData();
  }, []);

  return (
    <CardContext.Provider value={data}>
      <div className="container">
        <h1>🌽 Node Farm 🥦</h1>

        <div className="cards-container">
          {data.map((item: {}, index: number) => (
            <CardItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </CardContext.Provider>
  );

  /**
   * 获取页面数据
   */
  async function dealData() {
    const { data } = await getDataJson();
    setData(data);
  }
}
