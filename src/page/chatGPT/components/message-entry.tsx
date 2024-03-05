import React from "react";
import { Button, Input } from "antd";

import "./message-entry.less";

export default function MessageEntry(props: any) {
  const { changeQuestions, sendAsk, content, loading } = props;

  return (
    <div className="message-entry">
      <Input.TextArea
        autoSize={true}
        onChange={changeQuestions}
        value={content}
        className="input-textarea"
      />
      <Button
        type="primary"
        size="large"
        className="button"
        disabled={content && !loading ? false : true}
        onClick={sendAsk}
      >
        提交
      </Button>
    </div>
  );
}
