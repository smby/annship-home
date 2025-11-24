import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'

const AnyTimeAndWhere = () => {
  const [ indexNow, setIndexNow ] = useState(0)

  const srcList = [
    { id: 1, src: '/images/UPS_discount_2.png', discount: '/images/discount_present_ups.png' },
    { id: 2, src: '/images/fedex_discount_2.png', discount: '/images/fedex_usps_discount.png' },
    { id: 3, src: '/images/usps_discount_2.png', discount: '/images/fedex_usps_discount.png' }
  ]

  return (
    <>
      <div className="any-time-where">
        <div className="any-where">
          <div className="any-where-left">
            <div className="any-where-left-tag">
              <span className="any-where-left-tag-icon"> ! </span>
              <span className="any-where-right-text"> Covid-19 support in Annship </span>
            </div>
            <h3 className="any-where-left-title">Anytime & Anywhere</h3>
            <h3 className="any-where-left-title">Annship</h3>
            <div className="any-where-left-text">
              Start shipping now with instant access to the best possible
              discounts from FedEx, UPS, and more.
            </div>
            <div className="any-where-left-text">
              No coding or volume requirements.
            </div>
            <div className="any-where-left-btn-box">
              <div
                className="btn-all btn-all-right"
                onClick={ () => {
                  location.replace("https://annship.com/review-info")
                } }
              >
                Contact us
              </div>
            </div>
          </div>
          <div className="any-where-right">
            <div className="any-where-right-ul">
              {
                srcList.map((item, index) => {
                  return (
                    <div className="any-where-right-li" key={ item.id }
                         style={ { backgroundImage: `url(${ item.src })` } } onClick={ () => setIndexNow(index) }>
                      {
                        indexNow === index ? <div className="any-where-li-img-active" /> :
                          <div className="any-where-li-img" />
                      }
                    </div>
                  )
                })
              }
            </div>
            <img className="any-where-right-img" src={ srcList[indexNow].discount } alt="" />
          </div>
        </div>
      </div>
      <style jsx>{ `
        .any-time-where {
          width: 100%;
          height: 600px;
          // padding: 0 10%;
          background: url("/images/building_background.png") no-repeat bottom;
        }

        .any-where {
          width: 1140px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .any-where-left {
          width: 49%;
        }

        .any-where-left-tag {
          background-color: #e2eaed;
          border-radius: 999px;
          height: 36px;
          font-size: 18px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
        }

        .any-where-left-tag-icon {
          width: 36px;
          height: 36px;
          border-radius: 18px;
          margin-right: 10px;
          background-color: #ffd400;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
        }

        .any-where-left-title {
          font-size: 32px;
        }

        .any-where-left-text {
          font-size: 18px;
          width: 524px;
        }

        .any-where-left-btn-box {
          display: flex;
          margin-top: 36px;
        }

        .any-where-left-btn {
          width: 170px;
          height: 60px;
          display: block;
          text-align: center;
          line-height: 60px;
          color: #0eacb7;
          font-size: 20px;
          cursor: pointer;
          margin-right: 30px;
        }

        .any-where-left-btn:hover {
          background: #0eacb7;
          color: #fff;
          font-size: 800;
          border-radius: 34px;
        }

        .btn-active {
          background: #0eacb7;
          color: #fff;
          font-size: 800;
          border-radius: 34px;
        }

        .any-where-right {
          text-align: center;
        }

        .any-where-right-ul {
          display: flex;
          align-items: center;
          margin-bottom: 70px;
        }

        .any-where-right-li {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          margin-left: 40px;
          background-size: contain;
          position: relative;
          cursor: pointer !important;

        }

        .any-where-li-img {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 3px solid #ccc;
          cursor: pointer !important;
        }

        .any-where-li-img-active {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 3px solid #30e4f3;
          cursor: pointer !important;
        }

        .any-where-li-img:hover {
          border: 3px solid #30e4f3;
          cursor: pointer !important;
        }

        .any-where-right-img {
          width: 158px;
          height: 218px;
        }
      ` }</style>
    </>
  )
}

export default AnyTimeAndWhere
