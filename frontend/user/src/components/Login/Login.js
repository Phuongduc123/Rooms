import React, { useRef, useState } from "react";
import "./Login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Search } = Input;

function Login() {
  const formRef = useRef();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSignin = () => {};

  return (
    <div className="Login">
      <div className="background">
        <img className="text-intro" src="./assets/textintro.png" />
        <img className="background-login" src="./assets/backgroundlogin.png" />
      </div>
      <div className="scene">
        <img className="loginscene" src="./assets/loginscene.png" />
      </div>
      <div className="form-login">
        <Form
          ref={formRef}
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <div>
              <div className="signin-text">Đăng nhập</div>
              <div className="text-signin-intro">
                Đăng nhập Easy <span className="text-logo">Accomod</span> để có
                trải nghiệm tốt hơn.
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <div className="text-email">Địa chỉ email</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43e5ef",
                boxSizing: "border-box",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <div className="text-password">Mật khẩu</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43E5EF",
                boxSizing: "border-box",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(value) => {}}
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                color: "white",
                fontFamily: "Montserrat",
                borderRadius: "30px",
                backgroundColor: "#43E5EF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginLeft: "35%",
              }}
              type="ghost"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                handleSignin();
              }}
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="text-signin-intro" style={{textAlign:"center"}}>
              Bạn quên mật khẩu? <a>Nhấn vào đây</a>
            </div>
            <div className="text-signin-intro" style={{textAlign:"center"}}>
              Bạn chưa có tài khoản Easy{" "}
              <span className="text-logo">Accomod</span>? <a>Đăng ký</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
