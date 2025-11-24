const WhatCanDo = () => {
  return (
    <>
      <div className="whatCanDo">
        <div className="what-can-do-content">
          <img
            className="what-can-do-left"
            src={"/images/what_you_can_do.gif"}
            alt=""
          />
          <div className="what-can-do-right">
            <h3 className="do-right-title">What You Can Do With Annship</h3>
            <ul className="do-right-ul">
              <li className="do-right-ul-li">
                <img
                  src={"/images/connect_store.png"}
                  alt=""
                  className="do-right-img"
                />
                <div className="do-right-text">
                  <div className="do-right-text-title">CONNECT YOUR STORE</div>
                  <div className="do-right-text-content">
                    Sync all of your sales channels to easily manage orders in
                    one place.
                  </div>
                </div>
              </li>
              <li className="do-right-ul-li">
                <img
                  src={"/images/create_shipping_lable.png"}
                  alt=""
                  className="do-right-img"
                />
                <div className="do-right-text">
                  <div className="do-right-text-title">
                    RATE DISCOUNTED SHIPPING LABELS
                  </div>
                  <div className="do-right-text-content">
                    Get the lowest-possible rates from UPS, FedEx
                    and more.
                  </div>
                </div>
              </li>
              <li className="do-right-ul-li">
                <img
                  src={"/images/tracking.png"}
                  alt=""
                  className="do-right-img"
                />
                <div className="do-right-text">
                  <div className="do-right-text-title">
                    TRACK SHIPMENTS & NOTIFY CUSTOMERS
                  </div>
                  <div className="do-right-text-content">
                    Tracking and notifications to keep you and your customers
                    up- to- date.
                  </div>
                </div>
              </li>
              {/*<li className="do-right-ul-li">*/}
              {/*  <img*/}
              {/*    src={"/images/return.png"}*/}
              {/*    alt=""*/}
              {/*    className="do-right-img"*/}
              {/*  />*/}
              {/*  <div className="do-right-text">*/}
              {/*    <div className="do-right-text-title">STREAMLINE RETURNS </div>*/}
              {/*    <div className="do-right-text-content">*/}
              {/*      Generate return labels automatically, for free.*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .whatCanDo {
          width: 100%;
          height: 100%;
          // padding: 72px 10%;
        }
        .what-can-do-content {
          width: 1140px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .what-can-do-left {
          width: 452px;
          height: 434px;
        }

        .what-can-do-right {
        }
        .do-right-title {
          text-align: center;
          margin-bottom: 56px;
          font-size: 28px;
          font-weight: 600;
        }
        .do-right-ul {
          display: flex;
          flex-direction: column;
        }
        .do-right-ul-li {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 28px;
        }
        .do-right-img {
          width: 88px;
          height: 88px;
          margin-right: 32px;
        }
        .do-right-text {
          width: 100%;
        }
        .do-right-text-title {
          width: 100%;
          color: #000;
          font-weight: 500;
        }
        .do-right-text-content {
          width: 276px;
          color: rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </>
  );
};
export default WhatCanDo;
