import { Fetch } from "@utils/Fetch";

const askGpt = (questions: string) => {
  console.log(questions);
  Fetch("/chatgpt/ask", {
    method: "POST",
    body: {
      content: questions,
    },
  });
};
export { askGpt };
