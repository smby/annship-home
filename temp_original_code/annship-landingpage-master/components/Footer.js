// import Link from "next/link";
// import Head from "next/head";
// import Router from "next/router";
import Link from "next/link";
import Router from "next/router";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-logo">
            <img
              className="footer-logo-box"
              src={"/images/logo.png"}
            />
            <div style={{display: 'flex', flexDirection:'row', marginTop: '20px', marginLeft: '31px'}}>
              <div>
                <Link href="/">
                  <a
                    style={ {
                      cursor: 'pointer',
                      margin: '0 36px',
                      color: 'white',
                    } }
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about-us">
                  <a
                    style={ {
                      cursor: 'pointer',
                      margin: '0 36px',
                      color: 'white',
                    } }
                  >
                    About us
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a
                    style={ {
                      cursor: 'pointer',
                      margin: '0 36px',
                      color: 'white',
                    } }
                  >
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-box">
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', width: '100%', marginTop: '8px', marginBottom: '8px'}}>
          <div>
            <Link href="/privacy-policy">
              <a
                style={ {
                  cursor: 'pointer',
                  margin: '0 36px 0px 0px',
                  color: 'rgba(255,255,255,0.45)',
                } }
              >
                Privacy Policy
              </a>
            </Link>
            <Link href="/term-of-use">
              <a
                style={ {
                  cursor: 'pointer',
                  margin: '0 36px',
                  color: 'rgba(255,255,255,0.45)',
                } }
              >
                Terms Of Services
              </a>
            </Link>
          </div>
          <div className="copyright">
            Copyright © Annship 2025. All rights reserved
          </div>
        </div>
        <div style={{display: 'none'}}>
          <Link href="/lost-claim">
            <a
              style={ {
                cursor: 'pointer',
                margin: '0 36px',
              } }
            >
              a
            </a>
          </Link>
          <Link href="/damage-claim">
            <a
              style={ {
                cursor: 'pointer',
                margin: '0 36px',
              } }
            >
              b
            </a>
          </Link>
        </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 242px;
          background-color: #09152f;
        }
        .footer-end {
          width: 100%;
          background-color: black;
        }
        .footer-box {
          width: 1140px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .footer-logo {
          font-size: 14px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .footer-logo-box {
          width: 68px;
          height: 68px;
          cursor: pointer;
        }
        .ann {
          color: #ff9966;
        }
        .footer-text {
          margin-top: 28px;
          color: #fff;
        }
        .footer-text > span {
          margin: 0 24px;
        }
        .footer-icon {
          display: flex;
          flex-direction: row;
          justfi-content: center;
          margin-top: 48px;
        }
        .footer-icon-li {
          display: inline-block;
          margin-right: 40px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #1e3c70;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .footer-icon-li:last-child {
          margin-right: 0;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.45);
          text-align: center;
        }
      `}</style>
    </>
  );
};
export default Footer;
