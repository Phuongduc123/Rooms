import React, { useEffect,useState } from "react";
import "./Navbar.css";
import { Input,Layout, Popover } from "antd";
import {Link, useHistory} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import actions from "../../redux/actions/post/index";
import actionsLogin from "../../redux/actions/login/index";
import { connect } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
const {Header,Footer,Sider,Content}=Layout
const { Search } = Input;

function Navbar(props) {
  let history=useHistory();
  //state
  const [searchInput,setSearchInput] = useState("")
  const [userType,setUserType] = useState("");
  const [userName,setUserName] = useState("");
  const [logged,setLogged] = useState("");
  //hook
  useEffect(()=>{
    console.log(props.logged)
      setUserType(localStorage.getItem("Rooms_user_type"))
      setUserName(localStorage.getItem("Rooms_username"))
      setLogged(localStorage.getItem("Rooms_logged"))
  },[props.logged])

  

  //variable 
  const contentOverAvatar = (
    <div>
      <Link style={{color:"#1890ff"}} to="/profile"><p>{userName}</p></Link>
      {userType==="host"?<Link className="popover-elm" style={{color:"black"}} to="/create-post"><p>Đăng bài</p></Link>:<></>}
      <Link className="popover-elm"  style={{color:"black",cursor:"pointer"}} to="/login" onClick={()=>logout()}>Đăng xuất</Link>
    </div>
  );

  // function
  const signup=()=>{
    history.push('/select-people-type')
  }
  const logout=()=>{
    localStorage.removeItem("Rooms_logged")
    localStorage.removeItem("Rooms_token")
    localStorage.setItem("Rooms_user_type","")
    setUserName("");
    setUserType("");
    setLogged("");
    props.logout()
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
            <Search className="search" placeholder="Tìm kiếm" value={searchInput} onChange={(value)=>setSearchInput(value.target.value)} onPressEnter={()=>{
              props.searchPost(searchInput)
            }}/>
          </div>
        </li>
        <li className="option">
          <Link to="/home">Trang chủ</Link>
        </li>
        <li className="option">
          <Link to="/search">Tìm kiếm</Link>
        </li>
        {userType==="renter"?<li className="option">
          <Link to="/profile">Hồ sơ</Link>
        </li>:<></>}
        {userType==="host"?<li className="option">
          <Link to="/host-profile">Hồ sơ</Link>
        </li>:<></>}
        {userType==="admin"?<li className="option">
          <Link to="/admin/list-host">Admin</Link>
        </li>:<></>}
        <li className="sign">
          <div className="signin-signup">
            <button className="signup-btn" onClick={()=>signup()}>Đăng ký</button>
            <div className="I" />
            <Link to="/login" className="signin-btn">Đăng nhập</Link>
            <Link style={{marginLeft:"10px",display:logged==="true"?"block":"none"}} to="/profile">
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

const mapStateToProps = (state) => {
  return {
    logged:state.login.logged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPost:(searching)=>{
      dispatch(actions.searchPost(searching))
    },
    logout:()=>{
      dispatch(actionsLogin.logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
