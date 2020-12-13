import React, { useEffect, useRef, useState } from "react";
import "./HostProfile.css";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SideMenu from "../SideMenu/SideMenu.js";
import actions from "../../redux/actions/profile/index";
import { connect } from "react-redux";
const { TextArea } = Input;

function HostProfile(props) {
  const formRef = useRef();
  const [profile,setProfile] = useState("");
  const [email,setEmail] = useState("");
  const [CMT,setCMT] = useState("");
  const [fullname,setFullname] = useState("");
  const [address,setAddress] = useState("");
  const [username,setUsername] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");

  //hook
  useEffect(()=>{
    console.log(profile)
    setEmail(profile.email);
    setUsername(profile.username);
    setFullname(profile.fullname);
    setAddress(profile.address);
    setCMT(profile.identication);
    setPhoneNumber(profile.phoneNumber)

  },[profile])

  useEffect(()=>{
    props.getHostProfile(setProfile)
  },[])


  //function
  const handleSignin = () => {
    props.putHostUpdateProfile(fullname,CMT,address,phoneNumber);
  };

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
          <div className="black-text">Thông tin tài khoản</div>
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
        <div className="sidebar-div" style={{ flex: 2.2, height: "70%" }}>
          <SideMenu />
        </div>

        <div style={{ flex: 0.2 }} />
        <div className="sidebar-div" style={{ flex: 7.8, padding: "30px" }}>
          <Form
            ref={formRef}
            name="normal_signup"
            initialValues={{ remember: true }}
          >
            <Form.Item>
              <div className="text-password">Địa chỉ email</div>
              <Input

                style={{
                  borderRadius: "5px",
                }}
                value={email}
                disabled
                onChange={(value) => {
                  setEmail(value.target.value)
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Username</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                disabled
                value={username}
                placeholder="Username"
                onChange={(value) => {
                  setUsername(value.target.value)
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Họ và tên</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                value={fullname}
                placeholder="Họ và tên"
                onChange={(value) => {
                  setFullname(value.target.value)
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Số điện thoại</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                value={phoneNumber}
                placeholder="Số điện thoại"
                onChange={(value) => {
                  setPhoneNumber(value.target.value)
                }}
              />
            </Form.Item>
            <Form.Item>
              <div className="text-password">Số CMND</div>
              <Input
                style={{
                  borderRadius: "5px",
                }}
                value={CMT}
                placeholder="Số CMND"
                onChange={(value) => {
                  setCMT(value.target.value)
                }}
              />
            </Form.Item>
            {/* <Form.Item
              name="sex"
            >
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
            </Form.Item> */}
            <Form.Item>
              <div className="text-password">Địa chỉ</div>
              <TextArea
                rows={4}
                style={{
                  borderRadius: "5px",
                }}
                value={address}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Phường/ quận/ thành phố)"
                onChange={(value) => {
                  setAddress(value.target.value)
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
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0 }} />
        <img
          style={{ flex: 7, width: "1rem" }}
          className="Footer"
          src="./assets/FootPage.png"
        />
        <div style={{ flex: 0 }} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHostProfile: (setProfile) => {
      dispatch(actions.getHostProfile(setProfile));
    },
    putHostUpdateProfile: (fullname,identication,address,phoneNumber) =>{
      dispatch(actions.putHostUpdateProfile(fullname,identication,address,phoneNumber))
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(HostProfile);
