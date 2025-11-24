import { Divider } from "antd";
import React, { useEffect, useState } from "react";

const Meet = () => {
  const list = [
    { src: "/images/p1.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p2.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p3.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p4.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p5.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p6.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p7.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
    { src: "/images/p8.png", name: "Alex Nemeth", post: "CEO of Pixler Lab" },
  ];
  const [nowIndex, setNowIndex] = useState(0);
  const handlePrev = () => {
    setNowIndex(nowIndex - 1);
  };
  const handleNext = () => {
    setNowIndex(nowIndex + 1);
  };
  return (
    <>
      <div className="meet">
        <div className="meet-content">
          <div className="meet-left"> </div>
          <div className="meet-right">
            <h3 className="meet-right-h3">
              Meet Client Satisfaction by using Annship
            </h3>
            <p className="meet-right-title-text">
              See what e commerce merchants are saying about Annship
            </p>
            <img
              src={"/images/five_stars.png"}
              alt=""
              className="meet-right-five-star"
            />
            <h4 className="meet-right-h4">Great deal & Customizable</h4>
            <p className="meet-right-content">
              When we began looking into how we could facilitate a vinyl
              subscription service, we wanted to find a partner who could solve
              all of the nuances of shipping at scale, without us having to
              build this product ourselves.
            </p>
            <div className="meet-right-bottom-btn-box">
              <div className="meet-right-info">
                <div className="meet-right-avatar" style={{
                  width: 100,
                  height: 100,
                  background: `url(${list[nowIndex].src}) no-repeat center center`
                }}>
                </div>
                <div className="meet-right-introduce">
                  <h5>{list[nowIndex].name}</h5>
                  <p>{list[nowIndex].post}</p>
                </div>
              </div>
              <div className="meet-right-btn">
                {nowIndex > 0 ? (
                  <img
                    src={"/images/arrow_left.png"}
                    alt=""
                    onClick={handlePrev}
                  />
                ) : (
                  <img src={"/images/arrow_left.png"} alt="" />
                )}
                <Divider type="vertical" style={{ height: 30, top: 13 }} />
                {nowIndex < list.length - 1 ? (
                  <img
                    src={"/images/arrow_right.png"}
                    alt=""
                    onClick={handleNext}
                  />
                ) : (
                  <img src={"/images/arrow_right.png"} alt="" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .meet {
          width: 100%;
          max-width: 1280px;
          height: 100%;
          padding: 72px 0;
          margin: 0 auto;
        }
        .meet-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .meet-left {
          width: 56%;
          height: 524px;
          background: url("/images/map.png") no-repeat;
          background-size: cover;
        }
        .meet-right {
          width: 44%;
          padding-left: 32px;
          font-size: 16px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.45);
        }
        .meet-right-h3 {
          width: 484px;
          font-size: 40px;
          font-weight: 800;
        }
        .meet-right-title-text {
          width: 312px;
        }
        .meet-right-h4 {
          font-weight: 600;
          font-size: 16px;
          color: #000;
        }
        .meet-right-five-star {
          height: 20px;
          margin: 5px 0 20px;
        }
        .meet-right-content {
          width: 510px;
        }
        .meet-right-bottom-btn-box {
          width: 100%;
          margin-top: 80px;
          display: flex;
          justify-content: space-between;
        }
        .meet-right-info {
          display: flex;
          flex-direction: row;
        }
        .meet-right-avatar {
          border-radius: 50%;
          margin-right: 30px;
        }
        .avuter {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .meet-right-introduce > h5 {
          font-weight: 600;
          font-size: 20px;
          color: #000;
        }
        .meet-right-btn {
          display: flex;
        }
        .meet-right-btn > img {
          width: 50px;
          height: 50px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
export default Meet;
