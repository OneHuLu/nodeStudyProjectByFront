import { Fetch } from "@utils/Fetch";
import GeneratedArrayType from "./type";

const askGpt = async (
  questions: string,
  results: GeneratedArrayType,
  setResults: Function,
  setQuestions: Function
) => {
  const getResults = await Fetch("/chatgpt/ask", {
    method: "POST",
    body: {
      content: questions,
    },
  });

  if (!!getResults.data) {
    setQuestions(null);
  }
  // 将问题添加上去
  getResults.data.questions = {
    role: "user",
    content: questions,
  };
  setResults([...results, getResults]);
};
export { askGpt };
