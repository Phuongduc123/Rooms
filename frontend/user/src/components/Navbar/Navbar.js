import React, { useEffect,useState } from "react";
import "./Navbar.css";
import { Input,Layout, Popover } from "antd";
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
const {Header,Footer,Sider,Content}=Layout
const { Search } = Input;

function Navbar(props) {
  let history=useHistory();
  //state

  //variable 
  const contentOverAvatar = (
    <div>
      <Link style={{color:"black"}} to="/profile"><p>Phuong Duc</p></Link>
      <p>Content</p>
      <Link  style={{color:"black",cursor:"pointer"}} to="/login" onClick={()=>logout()}>Đăng xuất</Link>
    </div>
  );

  // function
  const signup=()=>{
    history.push('/select-people-type')
  }
  const logout=()=>{
    localStorage.removeItem("Rooms_logged")
    localStorage.removeItem("Rooms_token")
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
        {localStorage.getItem("Rooms_user_type")!=="host"?<li className="option">
          <Link to="/profile">Hồ sơ</Link>
        </li>:<></>}
        {localStorage.getItem("Rooms_user_type")==="host"?<li className="option">
          <Link to="/host-profile">Hồ sơ</Link>
        </li>:<></>}
        {/* {localStorage.getItem("Rooms_user_type")==="host"?<li className="option">
          <Link to="/create-post">Tạo bài đăng</Link>
        </li>:<></>} */}
        <li className="sign">
          <div className="signin-signup">
            <button className="signup-btn" onClick={()=>signup()}>Đăng ký</button>
            <div className="I" />
            <Link to="/login" className="signin-btn">Đăng nhập</Link>
            <Link style={{marginLeft:"10px",display:localStorage.getItem("Rooms_logged")==="true"?"block":"none"}} to="/profile">
              <Popover content={contentOverAvatar}>
                <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Popover>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );

  
}

export default withRouter(Navbar);
