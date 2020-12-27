import React, { useRef, useState } from "react";
import "./CardFollowPlace.css";
import { Card, Avatar, Pagination } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PlaceCard from "../Card/PlaceCard";

const { Meta } = Card;

function CardFollowPlace(props) {
  const handleChange = (value) => {
    props.setStart((value - 1) * 5);
    props.setEnd(value * 5);
  };
  return (
    <div className="CardFollowPlace">
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div className="line" />
        <div style={{ flexDirection: "column", flex: 1 }}>
          <div className="place">{`Địa điểm ${props.location}`}</div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 10 }} className="top-place">
              Top chỗ ở đánh giá tốt và đảm bảo nhất.
            </div>
            <div style={{ flex: 1,cursor:"pointer" }} className="watch-all">
              Xem thêm
            </div>
          </div>
        </div>  
      </div>
      <div style={{ display: "flex", marginTop: "1.3rem" }}>
        {props.posts.map((post, index) => {
          if (index === 0) {
            return (
              <div style={{ flex: 3 }}>
                <PlaceCard image={post.images[0]} id={post.id} post={post}/>
              </div>
            );
          } else {
            return (
              <>
                <div style={{ flex: 1 }} />
                <div style={{ flex: 3 }}>
                  <PlaceCard image={post.images[0]} id={post.id} post={post}/>
                </div>
              </>
            );
          }
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          defaultCurrent={1}
          defaultPageSize={5} // 5 default size of page
          onChange={handleChange} 
          total={100} //total number of card data available
        />
      </div>
    </div>
  );
}

export default CardFollowPlace;
