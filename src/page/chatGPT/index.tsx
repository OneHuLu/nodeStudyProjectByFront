import { Button, Input } from "antd";
import React, { useState } from "react";
import { askGpt } from "./chat-gpt";

export default function ChatGPT() {
  const [questions, setQuestions] = useState<string>("");

  const changeQuestions = (e: { target: { value: string } }) => {
    setQuestions(e.target.value);
  };
  const sendAsk = () => askGpt(questions);
  return (
    <div>
      <Input.TextArea autoSize={true} onChange={changeQuestions} />
      <Button onClick={sendAsk}>发送</Button>
    </div>
  );
}
