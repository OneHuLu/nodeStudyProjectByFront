import { Fetch } from "@utils/Fetch";
import GeneratedArrayType, { Message } from "./type";

const askGpt = async (
  questions: Message,
  messageList: GeneratedArrayType,
  setMessageList: Function
) => {
  const { data, status } =
    (await Fetch("/chatgpt/ask", {
      method: "POST",
      body: {
        content: questions.content,
      },
    })) || {};

  if (status === 200) {
    // 将问题添加上去
    data.questions = questions;
    setMessageList([...messageList, data]);
  } else {
    setMessageList([...messageList, {
      questions,
      message:{
        role:'assmission',
        content:"Sorry, I couldn't help you with this"
      }
    }]);
  }
};
export { askGpt };
