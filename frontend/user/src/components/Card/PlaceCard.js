import React, { useRef, useState } from "react";
import "./PlaceCard.css";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function PlaceCard() {
  return (
      <Card
        className="PlaceCard"
        style={{width:180}}
        bordered={false}
        cover={
          <img
            width="200px"
            height="100px"
            alt="example"
            src="./assets/room.jpeg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          style={{fontFamily:"Montserrat",height:"1rem"}}
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Huy le"
          description="Hà Nội" 
        />
      </Card>
  );
}

export default PlaceCard;
