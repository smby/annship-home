import Link from "next/link";
import Router from "next/router";
const WeDoing = () => {
  return (
    <>
      <div className="weDoing">
        <div className="we-doing-content">
          <div className="we-doing-title">
            <h3 className="we-doing-title-h3">
              We're doing our part to support SMBs.
            </h3>
            <div className="we-doing-title-p">
              To support our merchants during these challenging times, we are
              waiving Shippo software fees and offering our product for free
              through 1/19.
            </div>
          </div>
          <div className="we-doing-ul">
            <div className="we-doing-li">
              <div className="li-top">
                <h3 className="li-h3">
                  $1<span className="h3-span">/Label</span>
                </h3>
                <h4 className="li-h4">Free *through 1/19</h4>
                <h5 className="li-h5">Pay As You Go</h5>
                <div className="li-p">
                  You need a solution that's quick and easy with no commitments.
                </div>
              </div>
              <div className="li-bottom">
                <div className="li-bottom-p">
                  Up to 5000 Shipments Per Month
                </div>
                <div className="li-bottom-p">No Monthly Fees</div>
                <div className="li-bottom-p">Best USPS Discounts</div>
                <div className="li-bottom-p">Email Support</div>
                <div
                  className="li-bottom-btn"
                  onClick={() => {
                    // Router.push("/contactUs");
                  }}
                >
                  Start Today for Free
                </div>
              </div>
            </div>
            <div className="we-doing-li">
              <div className="li-top">
                <h3 className="li-h3">$10-125/month</h3>
                <h4 className="li-h4">Free *through 1/h9</h4>
                <h5 className="li-h5">Professional</h5>
                <div className="li-p">
                  You're serious about shipping and making each interaction
                  memorable.
                </div>
              </div>
              <div className="li-bottom">
                <div className="li-bottom-p">No Per Label Fee </div>
                <div className="li-bottom-p">Best USPS Discounts</div>
                <div className="li-bottom-p">Branded Customer Experience</div>
                <div className="li-bottom-p">Email and Live Chat Support</div>
                <div className="li-bottom-p">5 User Accounts</div>
                <div
                  className="li-bottom-btn"
                  onClick={() => {
                    // Router.push("/contactUs");
                  }}
                >
                  Start Today for Free
                </div>
                <div
                  className="li-bottom-btn2"
                  onClick={() => {
                    // Router.push("/contactUs");
                  }}
                >
                  Or Start 14 days trail
                </div>
              </div>
            </div>

            <div className="we-doing-li">
              <div className="li-top">
                <h3 className="li-h3">Contact us</h3>
                <h5 className="li-h5">Premier</h5>
                <div className="li-p">
                  You have a defined uflilment flow and need a customized
                  shipping solution.
                </div>
              </div>
              <div className="li-bottom">
                <div className="li-bottom-p">
                  Technical Implementation Assistance
                </div>
                <div className="li-bottom-p">Best USPS Discounts</div>
                <div className="li-bottom-p">Branded Customer Experience</div>
                <div className="li-bottom-p">Dedicated Customer Support </div>
                <div className="li-bottom-p">15 User Accounts</div>
                <div
                  className="li-bottom-btn"
                  onClick={() => {
                    Router.push("/contact-us");
                  }}
                >
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .weDoing {
          width: 100%;
          height: 100%;
          padding: 156px 0;
          border-top: 1px solid #f4f4f4;
          border-bottom: 1px solid #f4f4f4;
        }
        .we-doing-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
        }
        .we-doing-title {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 78px;
        }
        .we-doing-title-h3 {
          margin-bottom: 32px;
          font-size: 28px;
          font-weight: 600;
        }
        .we-doing-title-p {
          width: 650px;
          font-size: 16px;
          text-align: center;
          color: rgba(0, 0, 0, 0.45);
        }
        .we-doing-ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .we-doing-li {
          width: 318px;
          height: 100%;
          border-radius: 6px;
          border: 1px solid #ebebeb;
          padding: 0 0 56px 0;
        }
        .li-top {
          padding: 56px 0 8px;
          background: linear-gradient(top);
          width: 100%;
          height: 282px;
          background-color: #ebebeb;
          background-image: linear-gradient(50deg, #f3f7fa, #fff);
          color: rgba(0, 0, 0, 0.45);
        }
        .li-h3 {
          font-size: 24px;
          font-weight: 700;
          width: 100%;
          text-align: center;
        }
        .h3-span {
          font-size: 16px;
          font-weight: 300;
        }
        .li-h4 {
          font-size: 18px;
          font-weight: 600;
          margin: 32px 0 0 58px;
        }
        .li-h5 {
          font-size: 16px;
          font-weight: 400;
          margin: 16px 0 0 58px;
        }
        .li-p {
          font-size: 16px;
          width: 228px;
          color: rgba(0, 0, 0, 0.45);
          margin: 12px 0 0 58px;
          line-height: 22px;
        }
        .li-bottom {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .li-bottom-p {
          margin-top: 16px;
        }
        .li-bottom-btn {
          margin-top: 24px;
          display: block;
          min-width: 160px;
          padding: 10px 12px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #0eacb7;
          background-color: #0eacb7;
          border-radius: 9999px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .li-bottom-btn:hover {
          background-color: #f8fefe;
          color: #0eacb7;
        }
        .li-bottom-btn2 {
          display: block;
          color: #0eacb7;
          margin-top: 10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
export default WeDoing;
