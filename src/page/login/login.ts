import { Fetch } from "@utils/Fetch";
import { message as Message } from "antd";

const login = async (password: string, email: string) => {
  const { data, status, token, message } = await Fetch("/users/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
  if (status === 200) {
    // 保存token 以及用户数据
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(token));
    Message.info("Login successful");
    return true;
  } else {
    Message.error(message);
    return false;
  }
};

export { login };
