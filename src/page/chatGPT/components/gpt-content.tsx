import React, { useContext } from "react";
import QuestionItem from "./question-item";
import "./gpt-content.less";

export default function GptContent(props: any) {
  const { messageList, questions, loading } = props;
  // const lastInfo = messageList[messageList.length - 1];
  return (
    <div className="content-gpt">
      {/* 历史消息 */}
      {messageList.map((item: any, index: number) => (
        <div key={index}>
          {/* user */}
          <QuestionItem info={item?.questions} />
          {/* gpt */}
          <QuestionItem info={item?.message} />
        </div>
      ))}
      {/* 判断是否处于请求状态中 */}
      <div>
        {loading ? (
          <>
            <QuestionItem info={questions} />
            <QuestionItem info={{ role: "ass", context: "正在处理中" }} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
