import React, { useRef, useState } from "react";
import "./CardFollowPlace.css";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PlaceCard from "../Card/PlaceCard";

const { Meta } = Card;

function CardFollowPlace() {
  return (
    <div className="CardFollowPlace">
      <div style={{ display: "flex",marginTop:"30px" }}>
        <div className="line"/>
        <div style={{ flexDirection: "column",flex:1 }}>
          <div className="place">Địa điểm Hà Nội</div>
          <div style={{display:"flex"}}>
              <div style={{flex:10}} className="top-place">Top chỗ ở đánh giá tốt và đảm bảo nhất.</div>
              <div style={{flex:1}} className="watch-all">Xem thêm</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex",marginTop:"1.3rem" }}>
        <div style={{ flex: 3 }}>
          <PlaceCard />
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ flex: 3 }}>
          <PlaceCard />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 3 }}>
          <PlaceCard />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 3 }}>
          <PlaceCard />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 3 }}>
          <PlaceCard />
        </div>
      </div>
    </div>
  );
}

export default CardFollowPlace;
