import React, { useRef, useState } from "react";
// import "./Home.css";
import { Input, Carousel, Avatar } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
} from "@ant-design/icons";
const { Search } = Input;

function RoomDetail() {
  return (
    <div className="RoomDetail">
      <div
        style={{ marginTop: "10px", paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        {/* title and some information */}
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div className="line" />
          <div style={{ flexDirection: "column", flex: 1 }}>
            <div className="place">AnTamNhat - số 11 Phú Kiều</div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 10, fontSize: "12px", color: "grey" }}>
                Còn phòng
              </div>
              <div style={{ flex: 1, display: "flex", marginTop: "-20px" }}>
                <Avatar
                  size={40}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
                <div>
                  <div>Huy le</div>
                  <div style={{ fontSize: "10px", color: "grey" }}>Hà Nội</div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: "12px", color: "grey" }}>
              Ngày đăng: 01/12/2000
            </div>
          </div>
        </div>
      </div>
      {/* image collection */}
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }} />
        <div style={{ flex: 6, marginTop: "20px" }}>
          <Carousel
            style={{
              width: "800px",
              boxShadow: "0px 1px 3px rgba(0, 0, 20, 0.9)",
            }}
          >
            <div>
              <img
                src="./assets/room2.jpg"
                style={{ width: "800px", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="./assets/room2.jpg"
                style={{ width: "800px", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="./assets/room2.jpg"
                style={{ width: "800px", height: "400px" }}
              />
            </div>
            <div>
              <img
                src="./assets/room2.jpg"
                style={{ width: "800px", height: "400px" }}
              />
            </div>
          </Carousel>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <img
              src="./assets/room2.jpg"
              style={{
                padding: "3px",
                width: "200px",
                height: "200px",
                boxShadow: "0px 1px 3px rgba(0, 0, 20, 0.9)",
              }}
            />
            <img
              src="./assets/room2.jpg"
              style={{
                padding: "3px",
                width: "200px",
                height: "200px",
                boxShadow: "0px 1px 3px rgba(0, 0, 20, 0.9)",
              }}
            />
            <img
              src="./assets/room2.jpg"
              style={{
                padding: "3px",
                width: "200px",
                height: "200px",
                boxShadow: "0px 1px 3px rgba(0, 0, 20, 0.9)",
              }}
            />
            <img
              src="./assets/room2.jpg"
              style={{
                padding: "3px",
                width: "200px",
                height: "200px",
                boxShadow: "0px 1px 3px rgba(0, 0, 20, 0.9)",
              }}
            />
          </div>

          <div
            className="operations"
            style={{ display: "flex", marginTop: "20px" }}
          >
            <div style={{ flex: 2 }} />
            <div style={{ flex: 1 }}>
              <HeartOutlined
                style={{ marginLeft: "21px", cursor: "pointer" }}
              />
              <div style={{ fontSize: "12px" }}>Yêu thích</div>
            </div>
            <div style={{ flex: 1 }}>
              <EditOutlined style={{ marginLeft: "21px", cursor: "pointer" }} />
              <div style={{ fontSize: "12px" }}>Đánh giá</div>
            </div>
            <div style={{ flex: 1 }}>
              <EyeOutlined style={{ marginLeft: "21px", cursor: "pointer" }} />
              <div style={{ fontSize: "12px" }}>193 lượt xem</div>
            </div>
            <div style={{ flex: 1 }}>
              <WarningOutlined
                style={{ marginLeft: "21px", cursor: "pointer" }}
              />
              <div style={{ fontSize: "12px" }}>Báo cáo</div>
            </div>
            <div style={{ flex: 2 }} />
          </div>
        </div>
        <div style={{ flex: 3 }} />
      </div>

      <div className="information" style={{ display: "flex",marginTop:"40px" }}>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 7 }}>
          <div className="location">
            <div style={{fontSize:"20px"}}>Địa điểm</ div>
            <div style={{color:"gray"}}>
              Số nhà 11, ngõ 3, TDP số 12, phường Phúc Diễn, quận Bắc Từ Liêm,
              thành phố Hà Nội{" "}
            </div>
          </div>
        </div>

        <div style={{flex:1}}/>
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

export default RoomDetail;
