import React, { useRef, useState } from "react";
import "./RoomFilter.css";
import { Form, Input, Button, Carousel, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import CardFollowPlace from "../CardFollowPlace/CardFollowPlace";
import PlaceCard from "../Card/PlaceCard";
const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;

function RoomFilter() {
  return (
    <div className="RoomFilter">
      <div
        style={{ marginTop: "10px", paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div className="line" />
          <div style={{ flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex" }}>
              <div className="place">Lựa chọn khu vực bạn cần tìm</div>
              <Select
                className="select-province"
                defaultValue="Hà Nội"
                style={{ width: 120, marginLeft: "20px" }}
              >
                <Option value="Sài Gòn">Sài Gòn</Option>
                <Option value="Hà Nội">Hà Nội</Option>
              </Select>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ flex: 10 }} className="top-place">
                Tổng số nơi bạn có thể xem:{" "}
                <span style={{ fontSize: "30px" }}>50</span>
              </div>
              <div style={{ flex: 1 }} className="watch-all">
                Xem thêm
              </div>
            </div>

            {/* filter */}
            <div>
              <div className="add-filter">Thêm bộ lọc</div>
              <div className="all-filter">
                <div style={{ fontSize: "20px" }}>Địa điểm</div>
                <div
                  className="location-filter"
                  style={{ display: "flex", color: "rgba(0, 0, 0, 0.45)" }}
                >
                  <Input placeholder="Địa điểm" />
                </div>

                <div className="detail address" style={{marginTop:"10px"}}>
                  <div className="text-password">Mô tả địa chỉ</div>
                  <TextArea
                    rows={4}
                    style={{
                      borderRadius: "5px",
                    }}
                    // value={props.describeAddress}
                    placeholder="Mô tả địa chỉ"
                    onChange={(value) => {}}
                  />
                </div>

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 4 }} />
                  <div className="search-in-filter" style={{ flex: 1 }}>
                    Tìm kiếm
                  </div>
                  <div style={{ flex: 4 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rooms are filtered */}
      {/* <RowPlaceCard/>
      <RowPlaceCard/> */}

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

export default RoomFilter;

function RowPlaceCard() {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "7rem",
        paddingRight: "5rem",
        marginTop: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <PlaceCard />
      </div>
      <div style={{ flex: 0.2 }} />
      <div style={{ flex: 1 }}>
        <PlaceCard />
      </div>
      <div style={{ flex: 0.2 }} />
      <div style={{ flex: 1 }}>
        <PlaceCard />
      </div>
      <div style={{ flex: 0.2 }} />
      <div style={{ flex: 1 }}>
        <PlaceCard />
      </div>
      <div style={{ flex: 0.2 }} />
      <div style={{ flex: 1 }}>
        <PlaceCard />
      </div>
    </div>
  );
}
