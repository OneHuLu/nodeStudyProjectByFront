import { Fetch } from "@utils/Fetch";
import { message as Message } from "antd";

/**
 * 用户注册
 * @param name
 * @param email
 * @param password
 * @param passwordConfirm
 * @returns
 */
const signup = async (
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
) => {
  const { status, message } = await Fetch("/users/singup", {
    method: "POST",
    body: {
      name,
      email,
      password,
      passwordConfirm,
    },
  });
  if (status === 201) {
    Message.success("Sign up successfully!");
    return true;
  } else {
    Message.error(message);
    return false;
  }
};

export { signup };
