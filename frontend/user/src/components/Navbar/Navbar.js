import React from "react";
import "./Navbar.css";
import { Input,Layout } from "antd";
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from "react-router-dom";
const {Header,Footer,Sider,Content}=Layout
const { Search } = Input;

function Navbar(props) {
  let history=useHistory();
  // function
  const signup=()=>{
    history.push('/select-people-type')
  }
  return (
    <div className="Navbar">
      <ul className="nav-list">
        <li className="logo">
          <Link to="/home">
            <img src="./assets/logo.png" width="41px" height="41px" />
            <img src="./assets/logotext.png" width="104px" height="46px" />
          </Link>
        </li>
        <li className="">
          <div className="search-bar">
            <Search className="search" placeholder="Tìm kiếm"/>
          </div>
        </li>
        <li className="option">
          <Link to="/home">Trang chủ</Link>
        </li>
        <li className="option">
          <Link to="search">Tìm kiếm</Link>
        </li>
        <li className="option">
          <Link to="/profile">Hồ sơ</Link>
        </li>
        <li className="sign">
          <div className="signin-signup">
            <button className="signup-btn" onClick={()=>signup()}>Đăng ký</button>
            <div className="I" />
            <Link to="/login" className="signin-btn">Đăng nhập</Link>
          </div>
        </li>
      </ul>
    </div>
  );

  
}

export default withRouter(Navbar);
