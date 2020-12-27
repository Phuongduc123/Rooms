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
  const [isLoading,setIsLoading] = useState(true);
  const history=useHistory();

  //hook
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[])

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
        loading={isLoading}
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
          <SettingOutlined key="setting" onClick={()=>{
            history.push({
              pathname:"/update-room-detail",
              search:`?query=${props.id}`,
              state:{
                id:props.id,
                post:props.post
              }
            })
          }}/>,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
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
          style={{fontFamily:"Montserrat",height:"1rem"}}
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.post.hostName}
          description={props.post?.detailAddress} 
        />
      </Card>
  );
}



export default PlaceCard;
