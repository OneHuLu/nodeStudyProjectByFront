import React, { useCallback, useRef, useState } from "react";
import { askGpt } from "./chat-gpt";
import GptContent from "./components/gpt-content";
import GeneratedArrayType, { Message } from "./type";
import MessageEntry from "./components/message-entry";

import "./index.less";

export default function ChatGPT() {
  // 问题信息
  const [questions, setQuestions] = useState<Message>({
    role: "user",
    content: "",
  });
  const prevValueRef = useRef<Message>({
    role: "user",
    content: "",
  });

  // 消息队列
  const [messageList, setMessageList] = useState<GeneratedArrayType>([]); // 消息列表存放提问以及回答
  const [loading, setLoading] = useState<Boolean>(false);

  // 获取提出问题
  const changeQuestions = (e: { target: { value: string } }) =>
    setQuestions({
      role: "user",
      content: e.target.value,
    });
  // 发起请求
  const sendAsk = async () => {
    setQuestions((prevalue) => {
      prevValueRef.current = prevalue;
      return {
        role: "user",
        content: "",
      };
    });
    setLoading(true);
    await askGpt(prevValueRef.current, messageList, setMessageList);
    setLoading(false);
  };

  return (
    <div className="gpt-chat">
      {/* 展示区域 */}
      <GptContent
        messageList={messageList}
        questions={prevValueRef.current}
        loading={loading}
      />
      {/* 输入区域*/}
      <MessageEntry
        changeQuestions={changeQuestions}
        sendAsk={sendAsk}
        content={questions.content}
        loading={loading}
      />
    </div>
  );
}
