import { message as Message } from "antd";
import { handleUpload } from "upload-image-github";
import { Fetch } from "@utils/Fetch";
import { logout } from "@utils/common";
import { userPhotoPathSet } from "@utils/github-octokit";

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
  userPhoto: string,
  dispatch: Function
) => {
  let params: any = {
    name: userName,
    email: userEmail,
  };
  // 有头像就使用
  if (userPhoto) {
    params.photo = userPhoto;
  }
  const { data, status, message } = await Fetch("/users/updateMe", {
    method: "PATCH",
    body: params,
  });
  if (status === "success") {
    // 替换本地数据
    localStorage.setItem("user", JSON.stringify(data));
    // 数据存储清空
    dispatch({
      type: "my-account/saveData",
      payload: {
        key: "userPhoto",
        value: null,
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

/**
 * 上传文件
 * @param file
 * @param dispatch
 */
const uploadUserPhoto = async (file: any, dispatch: Function) => {
  const AccessInfo = {
    auth,
    owner,
    repo,
  };
  const path = userPhotoPathSet(file?.name);
  dispatch({
    type: "my-account/saveData",
    payload: {
      key: "userPhotoLoding",
      value: true,
    },
  });
  const download_url = (await handleUpload(file, path, AccessInfo)) || "";
  // 数据存储
  dispatch({
    type: "my-account/saveData",
    payload: {
      key: "userPhoto",
      value: download_url,
    },
  });
  dispatch({
    type: "my-account/saveData",
    payload: {
      key: "userPhotoLoding",
      value: false,
    },
  });
};

export { sideNav, adminNav, updateUserInfo, updatePassword, uploadUserPhoto };
