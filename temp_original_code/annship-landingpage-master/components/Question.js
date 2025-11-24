import React, { useState } from "react";
const Question = () => {
  const [list, setList] = useState([
    {
      id: 1,
      checked: true,
      title: "How can I get a proof of delivery?",
      p1:
        "Please contact Annship Support Team for proof of delivery. ",
      p2:
        "",
    },
    {
      id: 2,
      checked: false,
      title: "I just added funds to my account, how long it takes for the funds to be available?",
      p1:
        "It can take up to 1 business day for the funds to be available in your account. ",
      p2:
        "",
    },
    {
      id: 3,
      checked: false,
      title: "How to save the address information in my account?",
      p1:
        "The system saves the address automatically once it is input, or a label containing the address information is created.",
      p2:
        "",
    },
    {
      id: 4,
      checked: false,
      title: "How can I file a claim if a package was missing or damaged?",
      p1:
        "You can file claim with FedEx directly.",
      p2:
        "",
    },
    {
      id: 5,
      checked: false,
      title: "Can Annship file claim for me?",
      p1:
        "Yes. You can fill and submit the claim form to Annship.",
      p2:
        "For undelivered or lost shipment claim: https://www.annship.com/lost-claim/ \n" +
        "For damage claim: https://www.annship.com/damage-claim/ \n" +
        "Annship will be responsable for the following up of the claims once the form is received.\n",
    },
    {
      id: 6,
      checked: false,
      title: "How long will it take to receive the claim payment?",
      p1:
        "It usually takes about 2 weeks after the claim forms were submitted.",
      p2:
        "",
    },
    {
      id: 7,
      checked: false,
      title: "Is there a time limit for filing claims?",
      p1:
        "You must file your claim for damaged or missing contents no later than 60 calendar days from the shipment date for U.S. packages and 21 calendar days from the shipment date for international packages. Claims for undelivered or lost shipments must be filed within nine months of the shipment date.",
      p2:
        "",
    },
    {
      id: 7,
      checked: false,
      title: "Why the address auto parse function doesn’t work?",
      p1:
        "Please fill in the correct address manually when it can’t be parsed automatically.",
      p2:
        "",
    },
    {
      id: 8,
      checked: false,
      title: "Which language should be used when creating a label?",
      p1:
        "English.",
      p2:
        "",
    },
    {
      id: 9,
      checked: false,
      title: "How to cancel a label if it is not used?",
      p1:
        "You can void labels within 2 days after the labels are created. Please contact Annship support team for labels that were created more than 2 days ago.",
      p2:
        "",
    },
    {
      id: 10,
      checked: false,
      title: "What is the customs exemption amount for international shipping?",
      p1:
        "$2,500",
      p2:
        "",
    },
    {
      id: 11,
      checked: false,
      title: "What countries dose Annship ship to?",
      p1:
        "Annship support shipping from US to almost all the other countries.",
      p2:
        "",
    },
  ]);
  const handleChangeIcon = (index) => {
    let newList = [ ...list ]
    newList[index].checked = !newList[index].checked
    setList(newList)
  };
  return (
    <>
      <div className="question">
        <div className="question-content">
          <h3 className="question-title-h3">Frequently asked questions</h3>
          <p className="question-title-p">FAQs, Resolving Errors, More</p>
          <div className="question-ul">
            {list &&
              list.map((item,index) => (
                <div key={item.id} className="question-li">
                  <div className="question-li-h4" onClick={()=>handleChangeIcon(index)}>
                    <span>{item.title}</span>
                      <span className="plus-icon" >
                      {item.checked ? "-" : "+" }
                      </span>
                  </div>
                  {item.checked ? (
                    <div className="question-li-p-box">
                      <p className="question-li-p">{item.p1}</p>
                      <p className="question-li-p">{item.p2}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .question {
          width: 100%;
          height: 100%;
        }
        .question-content {
          width: 1140px;
          height: 100%;
          margin: 0 auto;
        }
        .question-title-h3 {
          width: 100%;
          text-align: center;
          font-weight: 600;
          font-size: 28px;
        }
        .question-title-p {
          width: 100%;
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          margin: 32px 0 60px;
        }
        .question-ul {
          width: 100%;
        }
        .question-li {
          width: 100%;
          background-color: #f6f7fb;
          margin-bottom: 12px;
          padding: 5px 34px;
        }
        .question-li-h4 {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          font-weight: 500;
          cursor:pointer;
        }
        .question-li-p-box {
        }
        .question-li-p {
          font-size: 14px;
          margin-bottom: 16px;
          white-space: pre-wrap;
          color: rgba(0, 0, 0, 0.45);
        }
        .plus-icon {
         cursor:pointer;
        }
      `}</style>
    </>
  );
};
export default Question;
