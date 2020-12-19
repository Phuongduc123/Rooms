import { Affix } from "antd";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import CreatePost from "./components/CreatePost/CreatePost";
import Home from "./components/Home/Home";
import HostProfile from "./components/HostProfile/HostProfile";
import Login from "./components/Login/Login";
import ManageAccount from "./components/ManageAccount/ManageAccount";
import ManagePost from "./components/ManagePost/ManagePost";
import Profile from "./components/Profile/Profile";
import ProfileChangePassword from "./components/ProfileChangePassword/ProfileChangePassword";
import RentSignup from "./components/RentSignup/RentSignup";
import RoomDetail from "./components/RoomDetail/RoomDetail";
import Signup from "./components/Signup/Signup";
import TypePeople from "./components/TypePeople/TypePeople";

function Routers() {
  const [logged,setLogged]= useState("false")
  useEffect(()=>{
    setLogged(localStorage.getItem("Rooms_logged"))
  },[])
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/select-people-type">
          <TypePeople />
        </Route>
        <Route path="/tenant-signup">
          <RentSignup />
        </Route>
        <Route path="/change-password">
          <ProfileChangePassword />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/delete-account">
          <ManageAccount />
        </Route>
        <Route path="/host-profile">
          <HostProfile/>
        </Route>
        <Route path="/manage-post">
          <ManagePost/>
        </Route>
        <Route path="/room-detail">
          <RoomDetail/>
        </Route>
        <Route path="/create-post">
          <CreatePost/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default Routers;
