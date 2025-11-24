import React, {useState} from 'react'
import { Form, Input, Button, Space, notification, Spin } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetToday from '../components/GetToday'
import Router from 'next/router'
import Link from 'next/link'

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    const { name, company, email, phone, subject, message } = values
    const payload = {
      receivers: 'support@annship.com',
      subject,
      content: `<h3> User Name </h3>
<div> <pre> ${ name } </pre> </div>
<h3> User Company </h3>
<div> <pre> ${ company } </pre> </div>
<h3> User Email </h3>
<div> <pre> ${ email } </pre> </div>
<h3> User Phone1 </h3>
<div> <pre> ${ phone } </pre> </div>
<h3> Message </h3>
<div> <pre> ${ message } </pre> </div>`
    }

    const url = '/api/email'
    const request = new Request(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify(payload)
    })
    fetch(request).then(response => {
      console.log(response)
      if(response.status === 200) {
        notification.success({ message: 'Mail sent', description: 'Annship will contact you ASAP' })
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
      <div className="contactUs">
        <Header />
        <div className="help">
          <div className="help-content">
            <h3 className="help-title">How Can We Help?</h3>
            <div className="help-text">
              We'd love to help you! Our knowledgeable support team is
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
            <Form.Item className="form">
              <h3 className="form-title">Send us a message</h3>
                <Spin spinning={loading}>

                <Form name="basic" initialValues={ {} } onFinish={ onFinish }>
                  <Form.Item label="name-info" noStyle>
                    <Form.Item name="name" rules={[{ required: true, message: 'Please input your name' }]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                    >
                      <Input
                        placeholder="Name"
                        style={ {
                          height: 60,
                          background: '#f3f3f3',
                        } }
                      />
                    </Form.Item>
                    <Form.Item name="company" rules={[{ required: false }]}
                               style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px'}}
                    >
                      <Input
                        placeholder="company"
                        style={ {
                          height: 60,
                          background: '#f3f3f3',
                        } }
                      />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item label="contact-info" noStyle>
                  <Form.Item name="email" rules={[{ required: true, message: 'Please input your email', type: 'email' }]}
                             style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}
                  >
                    <Input
                      placeholder="Email"
                      style={ {
                        height: 60,
                        background: '#f3f3f3',
                      } }
                    />
                  </Form.Item>
                  <Form.Item name="phone" rules={[{ required: false }]}
                             style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px'}}
                  >
                    <Input
                      placeholder="Phone number"
                      style={ {
                        height: 60,
                        background: '#f3f3f3',
                      } }
                    />
                  </Form.Item>
                  </Form.Item>
                 <Form.Item name="subject">
                  <Input
                    placeholder="Subject"
                    style={ { height: 60, background: '#f3f3f3' } }
                  />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Please input your message' }]}>
                  <Input.TextArea
                    placeholder="Message"
                    style={ { height: 210, background: '#f3f3f3' } }
                  />
                </Form.Item>

                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      Send message
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
                </Spin>
              </Form.Item>
          </div>
          </div>
        <Footer />
      </div>
      <style jsx>{ `
        .contactUs {
          width: 100%;
          height: 100%;
        }

        .help {
          width: 100%;
          height: 500px;
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
          height: 664px;
          border-bottom: 1px solid #f4f4f4;
        }

        .info-form {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
          position: relative;
        }

        .form {
          width: 100%;
          height: 664px;
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
          margin: 30px 0 30px;
        }
      ` }</style>
    </>
  )
}
export default ContactUs
