import React, { useRef, useState } from "react";
import "./Signup.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Search } = Input;

function Signup() {
  const formRef = useRef();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSignin = () => {};

  return (
    <div className="Signup">
      <div className="background">
        <img className="text-intro-signup" src="./assets/textintro.png" />
        <img className="background-signup" src="./assets/backgroundlogin.png" />
      </div>
      <div className="scene">
        <img className="signupscene" src="./assets/loginscene.png" />
      </div>
      <div className="form">
        <Form
          ref={formRef}
          name="normal_signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <div>
              <div className="signin-text">
                Đăng ký để <span style={{color:"orange"}}>tìm phòng</span> ngay hôm nay!
              </div>
              <div className="text-signin-intro">
                Đăng ký Easy <span className="text-logo">Accomod</span> để có
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
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <div className="text-password">Số điện thoại</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43E5EF",
                boxSizing: "border-box",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Số điện thoại"
              onChange={(value) => {}}
            />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <div className="text-password">Họ và tên</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43E5EF",
                boxSizing: "border-box",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Họ và tên"
              onChange={(value) => {}}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className="text-password">Mật khẩu (tối thiểu 8 ký tự)</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43E5EF",
                boxSizing: "border-box",
              }}
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật khẩu"
              onChange={(value) => {}}
            />
          </Form.Item>
          <Form.Item
            name="passwordAgain"
            rules={[{ required: true, message: "Please input your password Again!" }]}
          >
            <div className="text-password">Xác nhận mật khẩu</div>
            <Input
              style={{
                borderRadius: "30px",
                background: "#e3fbfd",
                border: "2px solid #43E5EF",
                boxSizing: "border-box",
              }}
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Xác nhận mật khẩu"
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
              className="signup-form-button"
              onClick={() => {
                handleSignin();
              }}
            >
              Đăng ký 
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="text-signin-intro">
            Bạn đã có tài khoản Easy{" "}
              <span className="text-logo">Accomod</span>? <a>Đăng nhập</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
