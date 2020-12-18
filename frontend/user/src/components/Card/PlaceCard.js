import React, { useEffect, useRef, useState } from "react";
import "./PlaceCard.css";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

const { Meta } = Card;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function PlaceCard(props) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const history=useHistory();

  //hook
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <Card
        style={{width:windowDimensions.width/7,cursor:"pointer"}}
        onClick={()=>{
          history.push({
            pathname:"/room-detail",
            search:`?query=${props.id}`,
            state:{
              id:props.id,
              post:props.post
            }
          })
        }}
        className="PlaceCard"
        bordered={false}
        cover={
          <img
            height="100px"
            alt="example"
            src={props.image}
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
          title={props.hostName}
          description="Hà Nội" 
        />
      </Card>
  );
}



export default PlaceCard;
