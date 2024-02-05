import { Octokit } from "@octokit/core";
import { v4 as uuidv4 } from "uuid";
import { readFileAsBase64 } from "utils/common";

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
const userPhotoPathSet = (file: any) => {
  const uniqueId = uuidv4();
  const id = getUserId();
  const imageSuffix = file?.name?.split(".")[1];
  const uploadPath = `natours/user/${id}/${uniqueId}.${imageSuffix}`;
  return uploadPath;
};

/**
 * 上传文件到github远程仓库
 * @param file
 * @param path
 * @returns
 */
const handleUpload = async (file: any, path: any) => {
  if (!file) {
    console.error("Please select a file");
    return;
  }
  // 文件路径处理

  try {
    const octokit = new Octokit({
      auth: gbPersonalAccessTokens, // 替换为你的 GitHub 个人访问令牌
    });
    // 读取文件内容
    const content = await readFileAsBase64(file);
    // 替换为你的 GitHub 仓库信息和上传路径
    const owner = gbOwner; // 替换为目标仓库的所有者（用户或组织名）
    const repo = gbRepo; // 替换为目标仓库的名称
    const branch = "master"; // 或你的仓库的默认分支
    // 使用 Octokit 上传文件
    const response = await octokit.request(
      `PUT /repos/${owner}/${repo}/contents/${path}`,
      {
        message: "Add user photo",
        content,
        branch,
      }
    );
    console.log("File uploaded:", response);
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export { handleUpload, userPhotoPathSet };
