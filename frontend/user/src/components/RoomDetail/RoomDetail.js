/* eslint-disable no-undef */
import React, { useEffect,createElement, useState } from "react";
import "./RoomDetail.css";
import { Input, Carousel, Avatar, Tooltip, Comment } from "antd";
import moment from "moment";
import {
  HeartOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
  GlobalOutlined,
  HomeOutlined,
  UserOutlined,
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { useLocation } from "react-router";
import actions from "../../redux/actions/post/index";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";
import FbImageLibrary from "react-fb-image-grid";
const { Search } = Input;
const {TextArea} = Input;

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
    console.log(props.roomDetail);
  }, []);

  const handleRoomType = (type) => {
    switch (type) {
      case "pt":
        return <div> phòng trọ</div>;
      case "cc":
        return <div> chung cư mini</div>;
      case "n":
        return <div> nhà nguyên căn</div>;
      case "ccnc":
        return <div> chung cư nguyên căn</div>;
    }
  };

  const handleBathRoom = (type) => {
    switch (type) {
      case "kk":
        return <div>khép kín</div>;
      case "c":
        return <div>chung</div>;
    }
  };

  const handleKitchen = (type) => {
    switch (type) {
      case "r":
        return <div>khu bếp riêng</div>;
      case "c":
        return <div>khu bếp chung</div>;
      case "k":
        return <div>không nấu ăn</div>;
    }
  };

  return (
    <div className="RoomDetail">
      <div
        style={{ marginTop: "10px", paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        {/* title and some information */}
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div className="line" />
          <div style={{ flexDirection: "column", flex: 1 }}>
            <div className="place">{props.roomDetail.post.detailAddress}</div>
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
                  <div>{props.roomDetail.hostName}</div>
                  <div style={{ fontSize: "10px", color: "grey" }}>
                    {props.roomDetail.post.detailAddress}
                  </div>
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
              <div className="address-name">
                {props.roomDetail.post.detailAddress}
              </div>
              <div className="post-date-detail">Ngày đăng: 12/11/2000</div>
              <div className="have-room">Còn phòng</div>
              <div className="price-detail">
                {props.roomDetail.post.price} /{" "}
                <span style={{ fontSize: "17px", color: "grey" }}>tháng</span>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <GlobalOutlined style={{ color: "brown" }} />
                <div style={{ marginLeft: "10px", color: "black" }}>
                  {props.roomDetail.post.describeAddress}
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <HomeOutlined style={{ color: "brown" }} />
                <div style={{ marginLeft: "10px", color: "black" }}>
                  {handleRoomType(props.roomDetail.post.roomType)}
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <UserOutlined style={{ color: "black" }} />
                <div style={{ marginLeft: "10px", color: "black" }}>
                  {props.roomDetail.post.numberOfRoom} người ở tối đa
                </div>
              </div>
              <div style={{ color: "black", marginTop: "10px" }}>
                Đánh giá:{" "}
                <span style={{ color: "red", fontSize: "17px" }}>4.9</span> /5
                (19 đánh giá)
              </div>
              <div className="contact">
                <div
                  style={{
                    color: "black",
                    fontSize: "13px",
                    marginTop: "10px",
                  }}
                >
                  Liên hệ:
                </div>
                <div>{`Tên chủ nhà: ${props.roomDetail.hostName}`}</div>
                <div>{`Hotline: ${props.roomDetail.phoneNumber}`}</div>
                <div>Email: huy@gmail.com</div>
              </div>
              <div
                className="operations"
                style={{ display: "flex", marginTop: "20px", color: "black" }}
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
              {props.roomDetail.post.detailAddress}
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
                  width: windowDimensions.width / 6,
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <div style={{ display: "flex" }}>
                      {`Loại phòng:`}
                      {handleRoomType(props.roomDetail.post.roomType)}
                    </div>
                    <div style={{ display: "flex" }}>{`Ban công: ${
                      props.roomDetail.post.balcony === true ? "có" : "không"
                    }`}</div>
                    <div style={{ display: "flex" }}>
                      {`Nhà tắm: `}
                      {handleBathRoom(props.roomDetail.post.bathroomType)}
                    </div>
                    <div style={{ display: "flex" }}>
                      {`Bếp: `} {handleKitchen(props.roomDetail.post.kitchen)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-utility" style={{ flex: 1 }}>
              <div style={{ fontSize: "20px" }}>Tiện ích</div>
              <div
                style={{
                  color: "grey",
                  wordBreak: "break-all",
                  width: windowDimensions.width / 6,
                }}
              >
                <ShowMoreText
                  expanded={false}
                  width={400}
                  lines={3}
                  more="Xem thêm"
                  less="Thu lại"
                >
                  bắt cóc, hãm hiếp và sát hại nhiều phụ nữ cũng như trẻ em gái
                  trong giai đoạn những năm 1970, thậm chí trước đó nữa. Sau hơn
                  một thập kỷ chối tội, trước khi bị hành quyết vào năm 1989,
                  anh đã thú nhận mình là thủ phạm của 30 vụ giết người tại 7
                  bang từ năm 1974 đến năm 1978. Số nạn nhân thực sự vẫn là điều
                  bí ẩn và có thể còn cao hơn con số 30. Bundy được đánh giá là
                  một người đẹp trai và lôi cuốn. Đây cũng là những điểm mà anh
                  tận dụng nhằm chiếm lòng tin của các nạn nhân và cả xã hội.
                  Anh thường tiếp cận mục tiêu ở những nơi công cộng, giả vờ bị
                  thương hoặc tàn tật hay đóng giả một nhân vật có thẩm quyền,
                  trước khi đánh họ bất tỉnh rồi đưa đến địa điểm vắng vẻ để
                  cưỡng hiếp và bóp cổ. Đôi khi anh quay lại hiện trường thứ cấp
                  của các vụ án, chải
                </ShowMoreText>
              </div>
            </div>
            <div className="note" style={{ flex: 1 }}>
              <div style={{ fontSize: "20px" }}>Chú ý</div>
              <div
                style={{
                  color: "grey",
                  wordBreak: "break-all",
                  width: windowDimensions.width / 6,
                }}
              >
                <ShowMoreText
                  expanded={false}
                  width={400}
                  lines={3}
                  more="Xem thêm"
                  less="Thu lại"
                >
                  bắt cóc, hãm hiếp và sát hại nhiều phụ nữ cũng như trẻ em gái
                  trong giai đoạn những năm 1970, thậm chí trước đó nữa. Sau hơn
                  một thập kỷ chối tội, trước khi bị hành quyết vào năm 1989,
                  anh đã thú nhận mình là thủ phạm của 30 vụ giết người tại 7
                  bang từ năm 1974 đến năm 1978. Số nạn nhân thực sự vẫn là điều
                  bí ẩn và có thể còn cao hơn con số 30. Bundy được đánh giá là
                  một người đẹp trai và lôi cuốn. Đây cũng là những điểm mà anh
                  tận dụng nhằm chiếm lòng tin của các nạn nhân và cả xã hội.
                  Anh thường tiếp cận mục tiêu ở những nơi công cộng, giả vờ bị
                  thương hoặc tàn tật hay đóng giả một nhân vật có thẩm quyền,
                  trước khi đánh họ bất tỉnh rồi đưa đến địa điểm vắng vẻ để
                  cưỡng hiếp và bóp cổ. Đôi khi anh quay lại hiện trường thứ cấp
                  của các vụ án, chải
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
                bắt cóc, hãm hiếp và sát hại nhiều phụ nữ cũng như trẻ em gái
                trong giai đoạn những năm 1970, thậm chí trước đó nữa. Sau hơn
                một thập kỷ chối tội, trước khi bị hành quyết vào năm 1989, anh
                đã thú nhận mình là thủ phạm của 30 vụ giết người tại 7 bang từ
                năm 1974 đến năm 1978. Số nạn nhân thực sự vẫn là điều bí ẩn và
                có thể còn cao hơn con số 30. Bundy được đánh giá là một người
                đẹp trai và lôi cuốn. Đây cũng là những điểm mà anh tận dụng
                nhằm chiếm lòng tin của các nạn nhân và cả xã hội. Anh thường
                tiếp cận mục tiêu ở những nơi công cộng, giả vờ bị thương hoặc
                tàn tật hay đóng giả một nhân vật có thẩm quyền, trước khi đánh
                họ bất tỉnh rồi đưa đến địa điểm vắng vẻ để cưỡng hiếp và bóp
                cổ. Đôi khi anh quay lại hiện trường thứ cấp của các vụ án, chải
              </ShowMoreText>
            </div>
          </div>
          <div className="comments">
            <div style={{ color: "black", marginTop: "30px",fontSize:"20px" }}>
              Đánh giá:{" "}
              <span style={{ color: "red", fontSize: "20px" }}>4.9</span> /5 (19
              đánh giá)
            </div>
            <div style={{display:"flex"}}>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <TextArea rows={4}/>
            </div>
            <CommentAntd />
            <CommentAntd />
            <CommentAntd />
            <CommentAntd />
            <CommentAntd />
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
  return {
    roomDetail: state.post.roomDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomDetail: (id) => {
      dispatch(actions.getRoomDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);

//comment
function CommentAntd(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div className="Comment">
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );
}


