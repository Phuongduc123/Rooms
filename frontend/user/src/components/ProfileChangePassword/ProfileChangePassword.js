import React, { useRef, useState } from "react";
import "./ProfileChangePassword.css";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SideMenu from "../SideMenu/SideMenu.js";
const { Search } = Input;
const { TextArea } = Input;

function ProfileChangePassword() {
  const formRef = useRef();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSignin = () => {};

  return (
    <div className="Profile">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} />
        <ul className="list-profile" style={{ flex: 14 }}>
          <li className="option">
            <a>Tài khoản</a>
          </li>
          <li className="option" style={{ opacity: "0.5" }}>
            <a>Yêu thích</a>
          </li>
          <li className="option" style={{ opacity: "0.5" }}>
            <a>Thông báo</a>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1.4 }} />
        <div style={{ flex: 14, display: "flex" }}>
          <div className="orange-text">Lê Xuân Huy </div>
          <div className="I" />
          <div className="black-text">Thay đổi mật khẩu</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1.4 }} />
        <div style={{ flex: 14, marginTop: "15px" }}>
          Hãy cập nhật thông tin cá nhân thật chính xác nhé!
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} />
        <div className="sidebar-div" style={{ flex: 2.2,height:"70%" }}>
          <SideMenu />
        </div>

        <div style={{ flex: 0.2 }} />
        <div className="sidebar-div" style={{ flex: 7.8, padding: "30px" }}>
          <Form
            ref={formRef}
            name="normal_signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item>
              <div className="text-password">Mật khẩu hiện tại</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                type="password"
                placeholder="Mật khẩu hiện tại"
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Mật khẩu mới</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                type="password"
                placeholder="Mật khẩu mới"
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Nhập lại mật khẩu</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                type="password"
                placeholder="Nhập lại mật khẩu"
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 5 }} />
                <Button
                  style={{
                    flex: 1,
                    color: "white",
                    fontFamily: "Montserrat",
                    borderRadius: "30px",
                    backgroundColor: "#43E5EF",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  type="ghost"
                  htmlType="submit"
                  className="signup-form-button"
                  onClick={() => {
                    handleSignin();
                  }}
                >
                  Đăng ký
                </Button>
                <div style={{ flex: 5 }} />
              </div>
            </Form.Item>
          </Form>
        </div>
        <div style={{ flex: 2 }} />
      </div>
      <div style={{display:"flex"}}>
        <div style={{flex:0}}/>
        <img style={{flex:7,width:"1rem"}} className="Footer" src="./assets/FootPage.png"/>
        <div style={{flex:0}}/>
      </div>
    </div>
  );
}

export default ProfileChangePassword;
