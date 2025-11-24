import React, { useState } from "react";
import {Form, Input, Button, Radio, Checkbox, notification, Spin} from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetToday from "../components/GetToday";

const DamageClaim = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Success:", values);
    let text1 =
      values.type1 &&
      values.type1.map((item) => {
        return checkList1[item - 1].text;
      });
    let text2 =
      values.type2 &&
      values.type2.map((item) => {
        return checkList2[item - 1].text;
      });
    let text3 =
      values.type3 &&
      values.type3.map((item) => {
        return checkList3[item - 1].text;
      });
    const payload = {
      receivers: "claim@annship.com",
      subject: "DamageClaim",
      content: `
      <h3> Tracking number(s) </h3> <div> <pre> ${
        values.trackingNumber
      } </pre> </div>
      <h3> Recipient Name/Contact </h3> <div> <pre> ${values.name} </pre> </div>
      <h3> Recipient Address </h3> <div> <pre> ${values.address} </pre> </div>
      <h3> Recipient Phone Number </h3> <div> <pre> ${
        values.phone
      } </pre> </div>
      <h3> Select the item that best describes your shipment </h3> <div> <pre> ${
        list[values.radio - 1].text
      } </pre> </div>
      <h3> Detail description of your item </h3> <div> <pre> ${
        values.description
      } </pre> </div>
      <h3> Unit cost of the damaged item </h3> <div> <pre> ${
        values.unitCost
      } </pre> </div>
      <h3> Number of the damaged item </h3> <div> <pre> ${
        values.number
      } </pre> </div>
      <h3> Select the type of damage to the contents of the shipment </h3> <div> <pre> ${text1.toString()}</pre> </div>
      <h3> Select the type of damage to the outer packaging </h3> <div> <pre> ${text2.toString()}</pre> </div>
      <h3> Select any packaging materials that were included </h3> <div> <pre> ${text3.toString()}</pre> </div>
      <h3> Additional comments </h3> <div> <pre> ${
        values.comments
      } </pre> </div>
      `,
    };
    const url = "/api/email";
    const request = new Request(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8;",
      },
      body: JSON.stringify(payload),
    });
    fetch(request).then((response) => {
      console.log(response)
      if(response.status === 200) {
        notification.success({
          message: "Your Damage Claim has been submitted successfully",
          description: "Annship Customer Support will contact you ASAP",
        });
      }else{
        notification.error({ message: 'Error', description: 'Something wrong, please try again' })
      }
    }).catch( err => {
      notification.error({ message: 'Error', description: 'Something wrong, please try again' })
    })
      .finally(()=>{
        setLoading(false)
      })
  };

  const list = [
    {
      value: 1,
      text:
        "Antiques, Collectibles, Jewelry (including coins,stamps, gold and silver)",
    },
    { value: 2, text: "Cell Phones, Tablets, Handheld Devices" },
    { value: 3, text: "Computer Equipment, Software, Components, Accessories" },
    {
      value: 4,
      text:
        "Documents - Legal, Personal, Business (includingvisas, passports and IDs)",
    },
    {
      value: 5,
      text:
        "Food, Animal, Agricultural, and Medical products, both Iperishable and non-perishable",
    },
    {
      value: 6,
      text:
        "Fragile & Glass Items (including bulbs, tubes, neon, fluorescents and scale models)",
    },
    { value: 7, text: "Furs, Fine Art, Paintings, Tapestry, Etched Glass" },
    {
      value: 8,
      text:
        "Liquid Chemicals or Consumables (including wine,alcohol and cleaners)",
    },
    { value: 9, text: "Medicine, Drugs, Controlled Substances" },
    { value: 10, text: "Money, Currency, Tickets, Bonds or Equivalents" },
    { value: 11, text: "Tobacco, Firearms" },
    { value: 12, text: "None of the Above" },
  ];
  const checkList1 = [
    { value: 1, text: "None" },
    { value: 2, text: "Bent" },
    { value: 3, text: "Contents Broken" },
    { value: 4, text: "Contents Missing" },
    { value: 5, text: "Contents Protruding" },
  ];
  const checkList2 = [
    { value: 1, text: "Closures Open" },
    { value: 2, text: "Corner of Box Crushed" },
    { value: 3, text: "Crushed" },
    { value: 4, text: "No Visible Damage" },
    { value: 5, text: "Punctured" },
    { value: 6, text: "Retaped" },
    { value: 7, text: "Ripped/Torn" },
    { value: 8, text: "Wet" },
    { value: 9, text: "Other, please specify in comment section" },
  ];
  const checkList3 = [
    { value: 1, text: "None" },
    { value: 2, text: "Bubble Wrap" },
    { value: 3, text: "Corner Post" },
    { value: 4, text: "Corrugated Liners" },
    { value: 5, text: "Molded Foam" },
    { value: 6, text: "Plastic Bags" },
    { value: 7, text: "Paper" },
    { value: 8, text: "Shredded Paper" },
    { value: 9, text: "Slotted Partition" },
    { value: 10, text: "Styrofoam Peanuts" },
    { value: 11, text: "Other, please specify in comment section" },
  ];
  const validateMessages = {
    required: "This field is required",
  };
  return (
    <>
      <div className="damageClaim">
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
                <img src={"/images/Location.png"} alt="" />
                <div className="help-li-text">Oro Valley, Arizona</div>
              </li>
              <li className="help-li">
                <img src={"/images/contact.png"} alt="" />
                <div className="help-li-text">(480) 535-1122</div>
              </li>
              <li className="help-li">
                <img src={"/images/email.png"} alt="" />
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
              <h3 className="form-title">Damage Claim</h3>
              <Spin spinning={loading}>
              <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label={<span className="required">Tracking number(s)</span>}
                >
                  <Form.Item
                    name="trackingNumber"
                    rules={[{ required: true }]}
                    noStyle
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 60,
                        background: "#f3f3f3",
                        marginRight: "6%",
                      }}
                    />
                  </Form.Item>
                  <p className="form-tag">
                    Please put in all the tracking numbers involved in this
                    claim.
                  </p>
                </Form.Item>

                <Form.Item
                  name="name"
                  label="Recipient Name/Contact"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Recipient Address"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="Street, City, State, Zip Code"
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Recipient Phone Number"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="radio"
                  label="Select the item that best describes your shipment"
                  rules={[{ required: true }]}
                >
                  <Radio.Group>
                    {list.map((item) => {
                      return (
                        <Radio
                          value={item.value}
                          key={item.value}
                          style={{ display: "block", marginBottom: 8 }}
                        >
                          {item.text}
                        </Radio>
                      );
                    })}
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Detail description of your item"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="unitCost"
                  label="Unit cost of the damaged item"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="number"
                  label="Number of the damaged item"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: 60,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="required">
                      Select the type of damage to the contents of the shipment
                    </span>
                  }
                >
                  <Form.Item name="type1" rules={[{ required: true }]}>
                    <Checkbox.Group name="type1" rules={[{ required: true }]}>
                      {checkList1.map((item) => {
                        return (
                          <Checkbox
                            value={item.value}
                            style={{
                              lineHeight: "32px",
                              display: "block",
                              marginLeft: 8,
                            }}
                            key={item.value}
                          >
                            {item.text}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
                  </Form.Item>
                  <p className="form-tag">(Select all that apply)</p>
                </Form.Item>
                <Form.Item
                  label={
                    <span className="required">
                      Select the type of damage to the outer packaging
                    </span>
                  }
                >
                  <Form.Item name="type2" rules={[{ required: true }]}>
                    <Checkbox.Group>
                      {checkList2.map((item) => {
                        return (
                          <Checkbox
                            value={item.value}
                            style={{
                              lineHeight: "32px",
                              display: "block",
                              marginLeft: 8,
                            }}
                            key={item.value}
                          >
                            {item.text}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
                  </Form.Item>
                  <p className="form-tag">(Select all that apply)</p>
                </Form.Item>
                <Form.Item
                  label={
                    <span className="required">
                      Select any packaging materials that were included
                    </span>
                  }
                >
                  <Form.Item name="type3" rules={[{ required: true }]}>
                    <Checkbox.Group>
                      {checkList3.map((item) => {
                        return (
                          <Checkbox
                            value={item.value}
                            style={{
                              lineHeight: "32px",
                              display: "block",
                              marginLeft: 8,
                            }}
                            key={item.value}
                          >
                            {item.text}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
                  </Form.Item>
                  <p className="form-tag">(Select all that apply)</p>
                </Form.Item>
                <Form.Item name="comments" label="Additional comments">
                  <Input.TextArea
                    style={{
                      width: "100%",
                      height: 100,
                      background: "#f3f3f3",
                      marginRight: "6%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="remember"
                  rules={[{ required: true }]}
                  valuePropName="checked"
                  label="Proof documents (file name should include the tracking#)"
                >
                  <Checkbox>
                    Emailed the proof documents(include tracking# in thefile
                    name) to claim@annship.com
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <p className="form-tag">
                    Including invoices and image of damaged item & package would
                    greatly increase the chance of getting settlement.
                  </p>
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
      <style jsx>{`
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
        .required::before {
          display: inline-block;
          margin-right: 4px;
          color: #ff4d4f;
          font-size: 14px;
          font-family: SimSun, sans-serif;
          line-height: 1;
          content: "*";
        }
      `}</style>
    </>
  );
};
export default DamageClaim;
