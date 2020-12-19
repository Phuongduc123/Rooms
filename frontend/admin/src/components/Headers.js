import React from "react";
import { Input,Layout } from "antd";
import '../style/Header.css'
const {Header,Footer,Sider,Content}=Layout
const { Search } = Input;

function Headers() {
  return (
    <div className="Headers">
      <ul className="nav-list">
        <li className="logo">
          <a>
            <img src="./assets/logo.png" width="41px" height="41px" />
            <img src="./assets/logotext.png" width="104px" height="46px" />
          </a>
        </li>
        <li className="option">
          <a>Trang chủ</a>
        </li>
        <li className="option">
          <a>Tìm kiếm</a>
        </li>
        <li className="option">
          <a>Hồ sơ</a>
        </li>
        <li className="sign">
          <div className="signin-signup">
            <button className="signup-btn">Đăng ký</button>
            <div className="I" />
            <a className="signin-btn">Đăng nhập</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Headers;
