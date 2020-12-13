import React, { useRef, useState } from "react";
import "./Chat.css";
import { Form, Input, Button, Carousel } from "antd";
import { MessageOutlined  } from "@ant-design/icons";
import CardFollowPlace from "../CardFollowPlace/CardFollowPlace";
import Avatar from "antd/lib/avatar/avatar";

function Chat() {
  const [hiddenContent, setHiddenContent] = useState(false);

  return (
    <div className="Chat">
      <div
        className="header-chat"
        onClick={() => {
          setHiddenContent(!hiddenContent);
        }}
      >
        <div className="icon-chat"><MessageOutlined /></div>
        <div>Tin nhắn</div>
        {hiddenContent === false ? (
          <div
            className="zoom-in-chat"
            onClick={() => {
              setHiddenContent(true);
            }}
          >
            _
          </div>
        ) : (
          <></>
        )}
      </div>
      {hiddenContent === false ? (
        <div className="body-chat">
          <div className="content-chat">
            <Message admin={false}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={false}/>
            <Message admin={false}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={true}/>
            <Message admin={true}/>
          </div>
          <Input placeholder="Nhập tin nhắn của bạn" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chat;

function Message(props) {

  return (
    <div style={{display:"flex"}}>
      {props.admin===true?<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />:<></>}
      {props.admin===false?<div style={{flex:1}}/>:<></>}
      <div
        className="Message"
        style={{
          backgroundColor: props.admin === false ? "grey" : "rgba(0,0,0,0.1)",
          color: props.admin === false ? "white" : "grey",
          right: "0px",
          flex:2,
        }}
      >
        Anh yêu em nhieu lam luon á
      </div>
      {props.admin===true?<div style={{flex:1}}/>:<></>}
    </div>
  );
}
