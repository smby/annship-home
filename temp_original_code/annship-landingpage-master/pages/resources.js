import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetToday from "../components/GetToday";

const Blog = () => {
  const list = [
    {
      id: 1,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
    {
      id: 2,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
    {
      id: 3,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
    {
      id: 4,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
    {
      id: 5,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
    {
      id: 6,
      title1: "ALL THINGS SHIPPING",
      title2:
        "REGIONAL CARRIERS ARE A RETAILER'S SECRET SAUCE THIS HOLIDAY SEASON",
      time: "JANUARY 25, 2020",
      content:
        "Lorem ipsum doloirs sit amet, csatetur adipisicin, sed does eiusmod tehampor incididunt uts laboasre et dolhvaliqua.",
    },
  ];
  return (
    <>
      <div className="blog">
        <Header />
        <div className="blog-banner">
          <div className="blog-content">
            <h4 className="blog-content-h4">The Delivery</h4>
            <p className="blog-content-p">
              Not Another Corporate Blog- Only The Best E- commerce Insights.
              Delivered On Time.
            </p>
          </div>
        </div>
        <div className="blog-order-posts">
          <div className="blog-order-content">
            {list.map((item) => {
              return (
                <div key={item.id} className="blog-list">
                  <img
                    src={"/images/blog_img.png"}
                    alt=""
                    className="blog-list-item-img"
                  />
                  <p className="list-item-title1">{item.title1}</p>
                  <h4 className="list-item-title2">{item.title2}</h4>
                  <p className="list-item-time">{item.time}</p>
                  <p className="list-item-content">{item.content}</p>
                  <div className="list-item-btn">Read more</div>
                  <div className="list-item-icon">
                    <div>
                      <i
                        className="fa fa-comments-o"
                        aria-hidden="true"
                        style={{ marginRight: 10, fontSize: 14 }}
                      ></i>
                      <span>NO COMMENT</span>
                    </div>
                    <div>
                      <i
                        className="fa fa-dribbble"
                        aria-hidden="true"
                        style={{ marginRight: 10, fontSize: 14 }}
                      ></i>
                      <i
                        className="fa fa-facebook"
                        aria-hidden="true"
                        style={{ marginRight: 10, fontSize: 14 }}
                      ></i>
                      <i
                        className="fa fa-twitter"
                        aria-hidden="true"
                        style={{ marginRight: 10, fontSize: 14 }}
                      ></i>
                      <i
                        className="fa fa-pinterest"
                        aria-hidden="true"
                        style={{ fontSize: 14 }}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="posts-more">Older Posts &gt;</div>
          </div>
        </div>
        <GetToday />
        <Footer />
      </div>
      <style jsx>{`
        .blog {
          width: 100%;
        }
        .blog-banner {
          width: 100%;
          height: 700px;
          background: url("/images/delivery_img.png") no-repeat;
          background-size: cover;
        }
        .blog-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .blog-content-h4 {
          color: #ffffff;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 26px;
        }
        .blog-content-p {
          font-size: 20px;
          font-weight: 300;
          width: 380px;
        }

        .blog-order-posts {
          width: 100%;
          padding: 110px 0 90px 0;
          background-color: #fcfcfc;
          border-bottom: 1px solid #f4f4f4;
        }
        .blog-order-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        }
        .blog-list {
          width: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 12px;
          font-weight: 300;
          background-color: #ffffff;
        }
        .blog-list:nth-child(2) {
          margin-left: 30px;
          margin-right: 30px;
        }
        .blog-list:nth-child(5) {
          margin-left: 30px;
          margin-right: 30px;
        }
        .blog-list-item-img {
          width: 360px;
          height: 234px;
        }
        .list-item-title1 {
          margin-top: 24px;
          padding: 0 30px;
        }
        .list-item-title2 {
          margin: 8px 0;
          padding: 0 30px;
        }
        .list-item-time {
          margin-bottom: 24px;
          padding: 0 30px;
        }
        .list-item-content {
          padding: 0 30px;
        }
        .list-item-btn {
          width: 170px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #0eacb7;
          border-radius: 34px;
          font-size: 18px;
          font-weight: 800;
          margin: 24px 0;
          cursor: pointer;
        }
        .list-item-icon {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f4f4f4;
          padding: 0 30px;
        }
        .posts-more {
          width: 100%;
          text-align: center;
          color: #0eacb7;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};
export default Blog;
