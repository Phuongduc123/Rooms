/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import ProfileChangePassword from "./components/ProfileChangePassword/ProfileChangePassword";
import TypePeople from "./components/TypePeople/TypePeople";
import RoomFilter from "./components/RoomFilter/RoomFilter";
import { Card, Input, Layout, Affix } from "antd";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Routers from "./Routers";
import Chat from "./components/Chat/Chat";
import CreatePost from "./components/CreatePost/CreatePost";
import Aside from "./components/Admin/Aside";

const { Header, Footer, Sider, Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>

      {/* Router for full screen */}
      <Routers />

      {/* <Login /> */}
      {/* <Signup/> */} 
      {/* <TypePeople/> */}
      {/* <RentSignup/> */}
      {/* <ProfileChangePassword/>   */}
      {/* <Profile/> */}
      {/* <ManageAccount/> */}
      {/* <Home/> */}
      {/* <PlaceCard/> */}
      {/* <CardFollowPlace/> */}
      {/* <RoomFilter/> */}
      {/* <RoomDetail/> */}
      {/* <CreatePost/> */}
      {/* <Aside/> */}

      {/* message */}

      <div style={{ position: "fixed",bottom:"0px", right: "10px", zIndex: 5 }}>
          <Chat />
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default App;
