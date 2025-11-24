import React, { useEffect } from "react";
import Slider from "react-slick";
const Carries = () => {
  const newlist = [
    { id: 1, src: "/images/ebay_logo.png" },
    { id: 2, src: "/images/shopify_logo.png" },
    { id: 3, src: "/images/shipstation_logo.png" },
    { id: 4, src: "/images/fedex_logo.png" },
    { id: 5, src: "/images/UPS_logo.png" },
    // { id: 6, src: "/images/UPS_logo.png" },
    // { id: 12, src: "/images/Amazon_logo.png" },
    { id: 13, src: "/images/Amazon_logo.png" },
    // { id: 14, src: "/images/fedex_logo.png" },
    // { id: 15, src: "/images/UPS_logo.png" },
  ];
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={"/images/arrow_right.png"}
        className={className}
        style={{ ...style, width: 50, height: 50, zIndex: 9999 }}
        onClick={onClick}
        alt=""
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={"/images/arrow_left.png"}
        className={className}
        style={{ ...style, width: 50, height: 50, zIndex: 9999 }}
        onClick={onClick}
        alt=""
      />
    );
  };
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="carries">
        <div className="carries-content">
          <h4 className="carries-h4">
            All of the Carriers and Stores You Need{" "}
          </h4>
          <div className="carries-bananer">
            <Slider {...settings}>
              {newlist.map((item) => {
                return (
                  <div className="carries-li" key="item.id">
                    <img src={item.src} alt="" className="carries-img" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <style jsx>{`
        .carries {
          width: 100%;
          height: 424px;
        }
        .carries-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .carries-bananer {
          width: 100%;
        }
        .carries-h4 {
          width: 100%;
          text-align: center;
          margin: 100px 0 30px 0;
        }
        .carries-li {
          display: flex !important;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          outline: none;
          hide-focus: true;
        }
        .carries-img {
          width: 150px;
          height: 150px;
        }
        .slick-track {
          // top:20px !important;
        }
      `}</style>
    </>
  );
};
export default Carries;
