import React, { useContext } from "react";
import QuestionItem from "./question-item";
import "./gpt-content.less";

export default function GptContent(props: any) {
  const { results } = props;
  return (
    <div className="content-gpt">
      {results.map((item: any, index: number) => (
        <div key={index}>
          {/* user */}
          <QuestionItem info={item?.data?.questions} />
          {/* gpt */}
          <QuestionItem info={item?.data?.message} />
        </div>
      ))}
    </div>
  );
}
