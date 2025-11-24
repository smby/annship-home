import React, { useState } from 'react'
import {Form, Input, Button, Radio, Checkbox, notification, Spin} from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetToday from '../components/GetToday'

const LostClaim = () => {
  const [loading, setLoading] = useState(false);

  const list = [
    {
      value: 1,
      text:
        'Antiques, Collectibles, Jewelry (including coins,stamps, gold and silver)',
    },
    { value: 2, text: 'Cell Phones, Tablets, Handheld Devices' },
    { value: 3, text: 'Computer Equipment, Software, Components, Accessories' },
    {
      value: 4,
      text:
        ' Documents - Legal, Personal, Business (including visas, passports and IDs)',
    },
    {
      value: 5,
      text:
        'Food, Animal, Agricultural, and Medical products, both Iperishable and non-perishable',
    },
    {
      value: 6,
      text:
        'Fragile & Glass ltems (including bulbs, tubes, neon, fluorescents and scale models)',
    },
    { value: 7, text: 'Furs, Fine Art, Paintings, Tapestry, Etched Glass' },
    {
      value: 8,
      text:
        'Liquid Chemicals or Consumables (including wine,alcohol and cleaners)',
    },
    { value: 9, text: 'Medicine, Drugs, Controlled Substances' },
    { value: 10, text: 'Money, Currency, Tickets, Bonds or Equivalents' },
    { value: 11, text: 'Tobacco, Firearms' },
    { value: 12, text: 'None of the Above' },
  ]

  const onFinish = (values) => {
    setLoading(true);

    const payload = {
      receivers: "claim@annship.com",
      subject: 'LostClaim',
      content: `<h3> Tracking number(s) </h3> <div> <pre> ${ values.trackingNumber } </pre> </div>
<h3> Recipient Name/Contact </h3> <div> <pre> ${ values.name } </pre> </div>
<h3> Recipient Address </h3> <div> <pre> ${ values.address } </pre> </div>
<h3> Recipient Phone Number </h3> <div> <pre> ${ values.phone } </pre> </div>
<h3> Description of Lost Item </h3> <div> <pre> ${ values.description } </pre> </div>
<h3> Unit Cost of the Item </h3> <div> <pre> ${ values.unitCost } </pre> </div>
<h3> Quantity of the Item </h3> <div> <pre> ${ values.quantity } </pre> </div>
<h3> Shipment </h3> <div> <pre> ${ list[values.radio - 1].text } </pre> </div>
<h3> Extra Comments </h3> <div> <pre> ${ values.comments } </pre> </div>
`
    }

    const url = '/api/email'
    const request = new Request(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify(payload)
    })
    fetch(request).then((response) => {
      console.log(response)
      if(response.status === 200) {
        notification.success({ message: 'Your Lost Claim has been submitted successfully', description: 'Annship Customer Support will contact you ASAP' })
      }else{
        notification.error({ message: 'Error', description: 'Something wrong, please try again' })
      }
    }).catch( err => {
      notification.error({ message: 'Error', description: 'Something wrong, please try again' })
    })
      .finally(()=>{
        setLoading(false)
      })
  }

  return (
    <>
      <div className="lostClaim">
        <Header />
        <div className="help">
          <div className="help-content">
            <h3 className="help-title">How Can We Help?</h3>
            <div className="help-text">
              We'd love to help you! Our knowledgeable technical support team is
              here to answer your questions.
            </div>
            <ul className="help-ul">
              <li className="help-li">
                <img src={ '/images/Location.png' } alt="" />
                <div className="help-li-text">Oro Valley, Arizona</div>
              </li>
              <li className="help-li">
                <img src={ '/images/contact.png' } alt="" />
                <div className="help-li-text">(480) 535-1122</div>
              </li>
              <li className="help-li">
                <img src={ '/images/email.png' } alt="" />
                <div className="help-li-text">
                  support@annship.com <br />
                  sales@annship.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <div className="info-form">
            <div className="form">
              <h3 className="form-title">Lost Claim</h3>
              <p className="form-title-tag"> The following information will be used to file lost package claim. </p>
              <Spin spinning={loading}>
              <Form name="basic" layout="vertical" onFinish={ onFinish }>
                <Form.Item
                  name="trackingNumber"
                  label="Tracking number(s)"
                  rules={ [
                    { required: true, message: 'Please provide the Tracking number' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                    placeholder="Please put in all the tracking numbers involved in this claim."
                  />
                </Form.Item>

                <Form.Item
                  name="name"
                  label="Recipient Name/Contact"
                  rules={ [
                    { required: true, message: 'Please provide the Recipient Name/Contact' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Recipient Address"
                  rules={ [
                    { required: true, message: 'Please provide the Recipient Address' },
                  ] }
                >
                  <Input
                    placeholder="Street, City, State, Zip Code"
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Recipient Phone Number"
                  rules={ [
                    { required: true, message: 'Please provide the Recipient Phone Number' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Description of your item"
                  rules={ [
                    { required: true, message: 'Please provide the description of your item' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="unitCost"
                  label="Unit cost of the item"
                  rules={ [
                    { required: true, message: 'Please provide the Unit cost of the item' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="quantity"
                  label="Quantity of the item"
                  rules={ [
                    { required: true, message: 'Please provide the Quantity of the item' },
                  ] }
                >
                  <Input
                    style={ {
                      width: '100%',
                      height: 60,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>

                <Form.Item
                  name="radio"
                  label="Select the item that best describes your shipment"
                  rules={ [
                    { required: true, message: 'Please select the item that best describes your shipment' },
                  ] }
                >
                  <Radio.Group>
                    { list.map((item) => {
                      return (
                        <Radio
                          value={ item.value }
                          key={ item.value }
                          style={ { display: 'block', marginBottom: 8 } }
                        >
                          { item.text }
                        </Radio>
                      )
                    }) }
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="comments"
                  label="Additional comments"
                >
                  <Input.TextArea
                    style={ {
                      width: '100%',
                      height: 100,
                      background: '#f3f3f3',
                      marginRight: '6%',
                    } }
                  />
                </Form.Item>
                <Form.Item
                  name="remember"
                  rules={ [
                    { required: true, message: 'Please check emailed the proof of value' },
                  ] }
                  label="Photos and proof of value (file name should include the tracking#)"
                  valuePropName="checked"
                >
                  <Checkbox>
                    Emailed the proof of value (include tracking# in the file name) to claim@annship.com. This includes
                    invoices or appraisal documents that can prove the
                    value would greatly increase the chance of getting
                    settlement.
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              </Spin>
            </div>
          </div>
        </div>
        <GetToday />
        <Footer />
      </div>
      <style jsx>{ `
        .lostClaim {
          width: 100%;
          height: 100%;
        }

        .help {
          width: 100%;
          height: 700px;
          background-color: #1b8380;
        }

        .help-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
        }

        .help-title {
          color: #fff;
          font-size: 36px;
          font-weight: 600;
        }

        .help-text {
          font-size: 21px;
          font-weight: 300;
          width: 610px;
        }

        .help-ul {
          display: flex;
          align-items: center;
          margin-top: 24px;
          margin-right: 0;
        }

        .help-li {
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 36px;
        }

        .help-li > img {
          width: 60px;
          height: 60px;
        }

        .help-li-text {
          margin-top: 20px;
        }

        .info {
          width: 100%;
          min-height: 1800px;
          border-bottom: 1px solid #f4f4f4;
        }

        .info-form {
          width: 1140px;
          min-height: 864px;
          margin: 0 auto;
          position: relative;
        }

        .form {
          width: 100%;
          min-height: 864px;
          position: absolute;
          top: -110px;
          left: 0;
          padding: 0 60px;
          background-color: #fff;
          box-shadow: 1px 1px 6px #f4f4f4;
        }

        .form-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 0;
          margin-top: 80px;
        }

        .form-title-tag {
          margin: 0;
          color: rgba(0, 0, 0, 0.45);
          margin: 5px 0 36px;
        }

        .form-tag {
          margin: 0;
          color: rgba(0, 0, 0, 0.45);
          margin: 5px 0 12px;
        }
      ` }</style>
    </>
  )
}
export default LostClaim
