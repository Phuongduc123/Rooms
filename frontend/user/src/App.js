import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import ProfileChangePassword from "./components/ProfileChangePassword/ProfileChangePassword";
import TypePeople from "./components/TypePeople/TypePeople";
import { Card, Input, Layout,Affix } from "antd";
import RentSignup from "./components/RentSignup/RentSignup";
import Profile from "./components/Profile/Profile";
import ManageAccount from "./components/ManageAccount/ManageAccount";
import Home from "./components/Home/Home";
import PlaceCard from "./components/Card/PlaceCard";
import CardFollowPlace from "./components/CardFollowPlace/CardFollowPlace";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>

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
    </div>
  );
}

export default App;
