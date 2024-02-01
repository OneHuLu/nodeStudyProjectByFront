import { Fetch } from "@utils/Fetch";
import { logout } from "@utils/common";
import { message as Message } from "antd";

const sideNav = [
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "My bookings",
    icon: "briefcase",
  },
  {
    name: "My reviews",
    icon: "star",
  },
  {
    name: "Billing",
    icon: "credit-card",
  },
];
const adminNav = [
  {
    name: "Manage tour",
    icon: "map",
  },
  {
    name: "Manage users",
    icon: "users",
  },
  {
    name: "Manage reviews",
    icon: "star",
  },
  {
    name: "Manage bookings",
    icon: "briefcase",
  },
];

/**
 * 更新用户信息
 * @param userName
 * @param userEmail
 * @param id
 */
const updateUserInfo = async (
  userName: string,
  userEmail: string,
  dispatch: Function
) => {
  const { data, status, message } = await Fetch("/users/updateMe", {
    method: "PATCH",
    body: {
      name: userName,
      email: userEmail,
    },
  });
  if (status === "success") {
    // 替换本地数据
    localStorage.setItem("user", JSON.stringify(data));
    // 数据存储
    dispatch({
      type: "my-account/saveData",
      payload: {
        key: "userInfo",
        value: data,
      },
    });
    Message.info("Successfully saved!");
  } else {
    Message.error(message);
  }
};

/**
 * 修改密码，用户自己
 * @param currentPassword
 * @param newPassword
 * @param confirmPassword
 * @returns
 */
const updatePassword = async (
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  const { status, message } = await Fetch("/users/updatePassword", {
    method: "PATCH",
    body: {
      passwordCurrent: currentPassword,
      password: newPassword,
      passwordConfirm: confirmPassword,
    },
  });
  if (status === 200) {
    // 修改密码后要重新登录
    return logout();
  } else {
    Message.error(message);
    return false;
  }
};

export { sideNav, adminNav, updateUserInfo, updatePassword };
