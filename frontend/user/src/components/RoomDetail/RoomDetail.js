import React, { useEffect, useRef, useState } from "react";
import "./RoomDetail.css";
import { Input, Carousel, Avatar } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
  GlobalOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router";
import actions from "../../redux/actions/post/index";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";
import FbImageLibrary from "react-fb-image-grid";
const { Search } = Input;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function RoomDetail(props) {
  const location = useLocation();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  //hook
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    props.getRoomDetail(location?.state?.id);
  }, []);

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
        <div style={{ flex: 10, marginTop: "20px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1.5 }}>
              <FbImageLibrary
                images={[
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                  "https://p4.wallpaperbetter.com/wallpaper/577/544/1016/star-wars-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg",
                ]}
                renderOverlay={() => <div>Xem ảnh</div>}
              />
            </div>
            <div className="information-table" style={{ flex: 1 }}>
              <div className="address-name">AnTamNhat - số 11 Phú Kiều</div>
              <div className="post-date-detail">Ngày đăng: 12/11/2000</div>
              <div className="have-room">Còn phòng</div>
              <div className="price-detail">3.500.000đ / <span style={{fontSize:"17px",color:"grey"}}>tháng</span></div>
              <div style={{display:"flex",marginTop:"10px"}}>
                <GlobalOutlined style={{color:"brown"}}/>
                <div style={{marginLeft:"10px",color:"black"}}>Phúc Diễn, Bắc Từ Liêm, Hà Nội</div>
              </div>
              <div style={{display:"flex"}}>
                <HomeOutlined style={{color:"brown"}}/>
                <div style={{marginLeft:"10px",color:"black"}}>Chung cư mini</div>
              </div>
              <div style={{display:"flex"}}>
                <UserOutlined style={{color:"black"}}/>
                <div style={{marginLeft:"10px",color:"black"}}>05 người ở tối đa</div>
              </div>
              <div style={{color:"black",marginTop:"10px"}}>Đánh giá: <span style={{color:"red",fontSize:"17px"}}>4.9</span> /5 (19 đánh giá)</div>
              <div className="contact">
                <div style={{color:"black",fontSize:"13px",marginTop:"10px"}}>Liên hệ:</div>
                  <div>Tên chủ nhà: Lê Xuân Huy</div>
                  <div>Hotline: 121535612</div>
                  <div>Email: huy@gmail.com</div>
              </div>
              <div
                className="operations"
                style={{ display: "flex", marginTop: "20px",color:"black" }}
              >
                <div style={{ flex: 1 }}>
                  <HeartOutlined
                    style={{ marginLeft: "21px", cursor: "pointer" }}
                  />
                  <div style={{ fontSize: "12px" }}>Yêu thích</div>
                </div>
                <div style={{ flex: 1 }}>
                  <EditOutlined
                    style={{ marginLeft: "21px", cursor: "pointer" }}
                  />
                  <div style={{ fontSize: "12px" }}>Đánh giá</div>
                </div>
                <div style={{ flex: 1 }}>
                  <EyeOutlined
                    style={{ marginLeft: "21px", cursor: "pointer" }}
                  />
                  <div style={{ fontSize: "12px" }}>193 view</div>
                </div>
                <div style={{ flex: 1 }}>
                  <WarningOutlined
                    style={{ marginLeft: "21px", cursor: "pointer" }}
                  />
                  <div style={{ fontSize: "12px" }}>Báo cáo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 3 }} />
      </div>

      <div
        className="information"
        style={{ display: "flex", marginTop: "40px" }}
      >
        <div style={{ flex: 1.5 }} />
        <div style={{ flex: 6 }}>
          <div className="location">
            <div style={{ fontSize: "20px" }}>Địa điểm</div>
            <div style={{ color: "grey" }}>
              Số nhà 11, ngõ 3, TDP số 12, phường Phúc Diễn, quận Bắc Từ Liêm,
              thành phố Hà Nội{" "}
            </div>
          </div>
          <div
            className="detail-room"
            style={{ display: "flex", marginTop: "10px" }}
          >
            <div className="room-type" style={{ flex: 1 }}>
              <div style={{ fontSize: "20px" }}>Loại phòng</div>
              <div
                style={{
                  color: "grey",
                  wordBreak: "break-all",
                  width: windowDimensions.width / 7,
                }}
              >
                <div style={{ display: "flex" }}>
                  <ShowMoreText
                    expanded={false}
                    width={300}
                    lines={3}
                    more="Xem thêm"
                    less="Thu lại"
                  >
                    adfhsdkajfkdsjfklajflkdkaljflkadsf
                    fsdaklfjaksldjfklasdjflkasdjflasdkjfklas
                    dasflkjsdalkfjkalsdjfkal fasdklfjkasldjflkasdjklfdasdasd
                  </ShowMoreText>
                </div>
              </div>
            </div>
            <div className="other-utility" style={{ flex: 1 }}>
              <div style={{ fontSize: "20px" }}>Tiện ích</div>
              <div
                style={{
                  color: "grey",
                  wordBreak: "break-all",
                  width: windowDimensions.width / 7,
                }}
              >
                <ShowMoreText
                  expanded={false}
                  width={300}
                  lines={3}
                  more="Xem thêm"
                  less="Thu lại"
                >
                  adfhsdkajfkdsjfklajflkdkaljflkadsf
                  fsdaklfjaksldjfklasdjflkasdjflasdkjfklas
                  dasflkjsdalkfjkalsdjfkal
                  fasdklfjkasldjflkasdjklfdasdasddsadsadas dsadsadasdas
                  dsadsadasdas dasdasdasd
                </ShowMoreText>
              </div>
            </div>
            <div className="note" style={{ flex: 1 }}>
              <div style={{ fontSize: "20px" }}>Chú ý</div>
              <div
                style={{
                  color: "grey",
                  wordBreak: "break-all",
                  width: windowDimensions.width / 7,
                }}
              >
                <ShowMoreText
                  expanded={false}
                  width={300}
                  lines={3}
                  more="Xem thêm"
                  less="Thu lại"
                >
                  adfhsdkajfkdsjfklajflkdkaljflkadsf
                  fsdaklfjaksldjfklasdjflkasdjflasdkjfklas
                  dasflkjsdalkfjkalsdjfkal fasdklfjkasldjflkasdjklfdasdasd
                </ShowMoreText>
              </div>
            </div>
          </div>
          <div className="description">
            <div style={{ fontSize: "20px", marginTop: "20px" }}>Mô tả</div>
            <div style={{ color: "grey" }}>
              <ShowMoreText
                expanded={false}
                width={windowDimensions.width / 1.5}
                lines={3}
                more="Xem thêm"
                less="Thu lại"
              >
                dasdsalkdsakdsaldksal;dsa;ldklsaldksa;ldklsaldsaxms
                dsadlkjsaldksan dsakdjaskldjsakl d sakdjsakldjsa dsadksajdas
                dsajdnsjanda daslkdsakldjas dsadljaskjdsal daslkdjsakldjsalkd
                daslkdjsakjdaslk daslkdjsa dklsajdklsajd daslkdjksaljd
                dsalkjdlsakdjdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssss
                ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              </ShowMoreText>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.5 }} />
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomDetail: (id) => {
      dispatch(actions.getRoomDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);
