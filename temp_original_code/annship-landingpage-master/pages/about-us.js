import Header from "../components/Header";
import Footer from "../components/Footer";
import GetToday from "../components/GetToday";
import Router from "next/router";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <Header />
        <div className="bridge">
          <div className="bridge-content">
            <div className="bridge-left">
              <h3 className="bridge-left-title">
                We Bridge the Distance Between Businesses and their Customers
              </h3>
              <div className="bridge-left-text">
                Annship is dedicated to developing a web based platform that
                enables our customers to efficiently order and manage their
                shipments. We believe shipping should be as easy as possible so
                you can focus on scaling your business. Our platform integrates
                multiple couriers, that allows you to ship your product in just
                a few steps. We are also integrating with multiple selling
                channels tailored for multi- store sellers. We also have
                developed specialized tools for creating labels in bulk.
              </div>
            </div>
            <img className="bridge-right" src={"/images/logo.gif"} alt="" />
          </div>
        </div>
        <div className="company">
          <div className="company-content">
            <img
              className="company-left"
              src={"/images/Our_company.gif"}
              alt=""
            />
            <div className="company-right">
              <h3 className="company-right-title">Our Company</h3>
              <div className="company-right-text">
                Our office is located in Oro Valley, Arizona. However, our
                partners are located all over the world, Our team is small, but
                sharply focused. We understand that the only way we can succeed
                is to achieve your goals. Our mission is to provide the best
                shipping experience and product management solution possible for
                our customers.
              </div>
              <div className="company-right-btn" onClick={() => {
                Router.push("/contact-us");
              }}>Join us</div>
            </div>
          </div>
        </div>
        <GetToday />
        <Footer />
      </div>
      <style jsx>{`
        .aboutUs {
          width: 100%;
          height: 100%;
        }
        .bridge {
          width: 100%;
          height: 700px;
          background-color: #1b8380;
          color: #fff;
        }
        .bridge-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bridge-left-title {
          color: #fff;
          font-weight: 600;
          margin-bottom: 24px;
          font-size: 30px;
          width: 600px;
        }
        .bridge-left-text {
          width: 660px;
          color: #fff;
          font-weight: 300;
          line-height: 26px;
          font-size: 20px;
        }
        .bridge-right {
          width: 268px;
          height: 268px;
        }

        .company {
          width: 100%;
          height: 100%;
          padding: 120px 0 150px 0;
          border-bottom: 1px solid #f4f4f4;
        }
        .company-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .company-left {
          width: 416px;
          height: 562px;
          margin-right: 190px;
        }
        .company-right-title {
          font-size: 34px;
          font-weight: 600;
          color: #000;
        }
        .company-right-text {
          margin: 36px 0 48px;
          width: 514px;
          color: rag(0, 0, 0, 0.3);
          font-weight: 300;
          font-size: 20px;
        }
        .company-right-btn {
          width: 170px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #0eacb7;
          border-radius: 34px;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
export default AboutUs;
