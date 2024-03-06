import { v4 as uuidv4 } from "uuid";

/**
 * 获取用户id
 * @returns
 */
const getUserId = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  return user._id;
};
/**
 * 用户头像上传路径
 * @param file
 * @returns
 */
const userPhotoPathSet = (name: string) => {
  const uniqueId = uuidv4();
  const id = getUserId();
  const imageSuffix = name?.split(".")[1];
  const uploadPath = `natours/user/${id}/${uniqueId}.${imageSuffix}`;
  return uploadPath;
};

export { userPhotoPathSet };
