import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageAccount from "./components/ManageAccount/ManageAccount";
import Profile from "./components/Profile/Profile";
import ProfileChangePassword from "./components/ProfileChangePassword/ProfileChangePassword";
import RentSignup from "./components/RentSignup/RentSignup";
import Signup from "./components/Signup/Signup";
import TypePeople from "./components/TypePeople/TypePeople";

function Routers() {
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
      </Switch>
    </div>
  );
}

export default Routers;
