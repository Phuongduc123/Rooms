import React, { useRef, useState } from "react";
import "./RentSignup.css";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Search } = Input;
const { TextArea } = Input;

function RentSignup() {
  const formRef = useRef();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSignin = () => {};

  return (
    <div className="RentSignup">
      <div className="background-rentSignup">
        <img
          className="background-login-rentSignup"
          src="./assets/backgroundlogin.png"
        />
        <img className="text-intro-rentSignup" src="./assets/textintro.png" />
      </div>
      <div className="form-rentSignup" style={{ display: "flex",marginBottom:"4rem" }}>
        <div style={{ flex: 0.2 }} />
        <Form
          ref={formRef}
          name="normal_signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{
            flex: 3,
            background: "#e3fbfd",
            padding: "20px",
            paddingLeft: "100px",
            paddingRight: "100px",
            borderRadius: "30px",
            boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)",
            marginTop: "-7rem",
          }}
        >
          <Form.Item>
            <div>
              <div className="signin-text" style={{ textAlign: "center" }}>
                Đăng ký để <span style={{ color: "orange" }}>cho thuê </span>sớm
                nhất!
              </div>
              <div
                className="text-signin-intro"
                style={{ textAlign: "center" }}
              >
                Đăng ký Easy <span className="text-logo">Accomod</span> để có
                trải nghiệm tốt hơn.
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div
              style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                color: "#38C5CE",
                fontSize: "28px",
              }}
            >
              Hồ sơ tài khoản
            </div>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 3 }}>
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
              </div>
              <div style={{ flex: 2 }} />
              <div style={{ flex: 3 }}>
                <div className="text-password">Địa chỉ email</div>
                <Input
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Địa chỉ email"
                  onChange={(value) => {}}
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 3 }}>
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
              </div>
              <div style={{ flex: 2 }} />
              <div style={{ flex: 3 }}>
                <div className="text-password">
                  Mật khẩu (tối thiểu 8 ký tự)
                </div>
                <Input
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mật khẩu (tối thiểu 8 ký tự)"
                  onChange={(value) => {}}
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name="sex"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 3 }}>
                <div className="text-password">Giới tính</div>
                <Radio.Group
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    fontFamily: "Montserrat",
                  }}
                >
                  <Radio
                    style={{ marginLeft: "20px", fontFamily: "Montserrat" }}
                    value={1}
                  >
                    Nam
                  </Radio>
                  <Radio
                    style={{ marginLeft: "20px", fontFamily: "Montserrat" }}
                    value={2}
                  >
                    Nữ
                  </Radio>
                  <Radio
                    style={{ marginLeft: "20px", fontFamily: "Montserrat" }}
                    value={3}
                  >
                    Khác
                  </Radio>
                </Radio.Group>
              </div>
              <div style={{ flex: 2 }} />
              <div style={{ flex: 3 }}>
                <div className="text-password">Địa chỉ email</div>
                <Input
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Địa chỉ email"
                  onChange={(value) => {}}
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div
              style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                color: "orange",
                fontSize: "28px",
              }}
            >
              Căn cước/ CMND
            </div>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 3 }}>
                <div className="text-password">Họ và tên theo CMTND</div>
                <Input
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Họ và tên theo CMTND"
                  onChange={(value) => {}}
                />
                <div className="text-password" style={{ marginTop: "15px" }}>
                  Số CMTND
                </div>
                <Input
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Số CMTND"
                  onChange={(value) => {}}
                />
              </div>
              <div style={{ flex: 2 }} />
              <div style={{ flex: 3 }}>
                <div className="text-password">Hộ khẩu thường trú</div>
                <TextArea
                  rows={4}
                  style={{
                    borderRadius: "30px",
                    background: "#e3fbfd",
                    border: "2px solid #43E5EF",
                    boxSizing: "border-box",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Hộ khẩu thường trú (phường/ quận/ thành phố)"
                  onChange={(value) => {}}
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{display:"flex"}}>
              <div style={{flex:4}}></div>
              <Button
                style={{
                  color: "white",
                  flex:1,
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
              <div style={{flex:4}}></div>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{ textAlign: "center" }}>
              Bạn đã có tài khoản Easy{" "}
              <span className="text-logo">Accomod</span>? <a>Đăng nhập</a>
            </div>
          </Form.Item>
        </Form>
        <div style={{ flex: 0.2 }} />
      </div>
    </div>
  );
}

export default RentSignup;
