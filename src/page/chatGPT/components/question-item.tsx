import React from "react";
import { Image } from "antd";
import "./question-item.less";
import UserPhoto from "../image/user-gpt.jpg";
import GPTPhoto from "../image/gpt-photo.jpg";

export default function QuestionItem(props: any) {
  const {
    info: { role, content },
  } = props;
  return (
    <div className="user-question">
      {/* 头像 */}
      <div className="user-pohot">
        <Image
          src={role == "user" ? UserPhoto : GPTPhoto}
          preview={false}
          className="img"
        />
      </div>
      {/* 输出输入 */}
      <div className="question">
        <div className="text">{role == "user" ? "你" : "GPT"}</div>
        <div className="quesetion-text">{content}</div>
      </div>
    </div>
  );
}
