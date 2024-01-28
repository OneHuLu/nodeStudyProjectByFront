import { Fetch } from "../../uitls/Fetch";

const login = async (password: string, email: string) => {
  const { data, status, token } = await Fetch("/users/login", {
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
    return true;
  } else {
    return false;
  }
};

export { login };
