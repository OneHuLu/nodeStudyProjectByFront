import { Button, Input } from "antd";
import React, { useCallback, useState } from "react";
import { askGpt } from "./chat-gpt";
import GptContent from "./components/gpt-content";
import GeneratedArrayType from "./type";

export default function ChatGPT() {
  // 状态存储
  const [questions, setQuestions] = useState<string>("");
  const [results, setResults] = useState<GeneratedArrayType>([]);

  // 获取提出问题
  const changeQuestions = (e: { target: { value: string } }) => {
    setQuestions(e.target.value);
  };
  // 发起请求
  const sendAsk = () => askGpt(questions, results, setResults, setQuestions);

  return (
    <div>
      {/* 展示区域 */}
      <GptContent results={results} />
      {/* 输入区域 */}
      <Input.TextArea
        autoSize={true}
        onChange={changeQuestions}
        value={questions}
      />
      <Button onClick={sendAsk}>发送</Button>
    </div>
  );
}
