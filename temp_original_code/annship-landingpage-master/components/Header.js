import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import userRouter from "next/router";
import { useEffect, useState } from "react";

const Header = () => {

  const [url, setUrl] = useState("/");

  useEffect(() => {
    const { router } = userRouter;
    setUrl(router.pathname);
  }, []);

  // let url = router && router.pathname;

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Annship</title>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="header">
        <div className="nav">
          <img
            className="logoBox"
            src={"/images/Logo_annship.png"}
            alt=""
            onClick={() => {
              Router.push("/");
            }}
          />
          <div className="rightBox">
            <div className="nav-ul">
              <Link href="/">
                <span className={url === "/" ? "nav-li-active" : "nav-li"}>
                  Home
                </span>
              </Link>
              <Link href="/about-us">
                <span
                  className={url === "/about-us" ? "nav-li-active" : "nav-li"}
                >
                  About us
                </span>
              </Link>
              <Link href="/contact-us">
                <span
                  className={
                    url === "/contact-us" ||
                    url === "/damage-claim" ||
                    url === "/lost-claim"
                      ? "nav-li-active"
                      : "nav-li"
                  }
                >
                  Contact us
                </span>
              </Link>
            </div>
            <div className="btn-all" onClick={() => {
              window.location.href="https://annship.com/login";
            }}>Login</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            width: 100%;
            height: 166px;
          }
          .nav {
            width: 1140px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logoBox {
            width: 192px;
            height: 68px;
            cursor: pointer;
          }
          .rightBox {
            display: flex;
            align-items: center;
          }
          .nav-ul {
            display: flex;
          }
          .nav-li {
            font-weight: 400;
            margin-right: 36px;
            font-size: 16px;
            color: #000;
            cursor: pointer;
          }
          .nav-li-active {
            font-weight: 400;
            margin-right: 36px;
            font-size: 16px;
            color: #01acb7;
            cursor: pointer;
          }
          .nav-li:hover {
            color: #01acb7;
          }
          .nav-login {
            color: #01acb7;
            margin: 0 24px 0 66px;
            font-size: 21px;
            font-weight: bold;
            cursor: pointer;
          }
          .nav-sign {
            // width: 170px;
            // height: 58px;
            // border-radius: 27px;
            // background-color: #01acb7;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // font-size: 22px;
            // color: #fff;
            // font-weight: 800;
            // cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
export default Header;
