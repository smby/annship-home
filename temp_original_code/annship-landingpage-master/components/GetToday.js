import Router from "next/router";

const GetToday = () => {
  return (
    <>
      <div className="get-today">
        <div className="get-today-content">
          <div className="get-today-left">
            <div className="get-today-left-title">
              Get Started Today For Free
            </div>
            <div className="get-today-left-text">
              Everything you need for professional-grade shipping + deep
              discounts from top carriers.
            </div>
            <div className="btn-all" onClick={() => {
              // Router.push("/contact-us");
              location.replace("https://annship.com/review-info")
            }}>Sign Up Free</div>
          </div>
          <img
            className="get-today-right"
            src={"/images/Get_started.png"}
            alt=""
          />
        </div>
      </div>
      <style jsx>{`
        .get-today {
          width: 100%;
          padding: 100px 0;
        }
        .get-today-content {
          width: 1140px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .get-today-left-left {
        }
        .get-today-left-title {
          font-size: 24px;
          font-weight: 600;
        }
        .get-today-left-text {
          margin: 40px 0;
          width: 560px;
          font-size: 17px;
        }
        .get-today-right {
          width: 204px;
          height: 250px;
        }
      `}</style>
    </>
  );
};
export default GetToday;
