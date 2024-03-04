import React, { useCallback, useState } from "react";
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
    await askGpt(questions, messageList, setMessageList, setLoading);
    setQuestions({
      role: "user",
      content: "",
    });
  };

  return (
    <div className="gpt-chat">
      {/* 展示区域 */}
      <GptContent
        messageList={messageList}
        questions={questions}
        loading={loading}
      />
      {/* 输入区域 TODO: 点击发送给后文本型该清空*/}
      <MessageEntry
        changeQuestions={changeQuestions}
        sendAsk={sendAsk}
        content={questions.content}
      />
    </div>
  );
}
