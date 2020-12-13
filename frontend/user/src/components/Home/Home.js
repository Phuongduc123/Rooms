import React, { useRef, useState } from "react";
import "./Home.css";
import { Form, Input, Button, Carousel, Affix } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import CardFollowPlace from "../CardFollowPlace/CardFollowPlace";
import Chat from "../Chat/Chat";
const { Search } = Input;

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function onChange(a, b, c) {
  console.log(a, b, c);
}

function Home() {
  return (
    <div className="Home">
      <div style={{marginTop:"10px",paddingLeft:"5rem",paddingRight:"5rem"}}>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div>
          <CardFollowPlace/>
          <CardFollowPlace/>
          <CardFollowPlace/>
        </div>
      </div>

      {/* footer */}
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

export default Home;
