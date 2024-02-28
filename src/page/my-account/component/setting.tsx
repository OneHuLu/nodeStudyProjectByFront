import React, { useState } from "react";
import { Button, Upload, UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updatePassword, updateUserInfo, uploadUserPhoto } from "../my-account";

export default function Setting(props: any) {
  const { user } = props;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { userPhoto, userPhotoLoding } = useSelector(
    (state: any) => state.myAccount
  );

  // useState
  const [userName, setUserName] = useState(user?.name); //userName
  const [userEmail, setUserEmail] = useState(user?.email); //userEmail
  const [currentPassword, setCurrentPassword] = useState(""); // Current password
  const [newPassword, setNewPassword] = useState(""); // New password
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: user?.photo,
    },
  ]);

  // Handle Function
  const handleFileChange = (event: any) => {
    setFileList(event?.fileList);
    const file = event?.fileList[0];
    if (event?.file?.status !== "uploading") {
      uploadUserPhoto(file?.originFileObj, dispatch);
    }
  };
  // 阻止Upload的action上传
  const beforeUpload = () => false;

  return (
    <>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <form className="form form-user-data">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form__input"
              type="text"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <Upload
              listType="picture-circle"
              maxCount={1}
              fileList={fileList}
              beforeUpload={beforeUpload}
              onChange={handleFileChange}
              showUploadList={{
                showRemoveIcon: false,
              }}
              className="upload"
            >
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </div>

          <div className="form__group right">
            <Button
              className="btn btn--small btn--green"
              loading={userPhotoLoding}
              onClick={async (e) => {
                e.preventDefault();
                await updateUserInfo(userName, userEmail, userPhoto, dispatch);
              }}
            >
              Save settings
            </Button>
          </div>
        </form>
      </div>

      <div className="line">&nbsp;</div>

      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-settings">
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input
              id="password-current"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="password">
              New password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              id="password-confirm"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form__group right">
            <Button
              className="btn btn--small btn--green"
              onClick={async (e) => {
                e.preventDefault();
                const status = await updatePassword(
                  currentPassword,
                  newPassword,
                  confirmPassword
                );
                status && navigator("/login");
              }}
            >
              Save password
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
