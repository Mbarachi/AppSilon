import React from "react";
import "./disbursement-card.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import disbursementData from '../../data/disbursement-detials.json'

const DisbursementCard = () => {
  return (
    <div className="disbursement-container">
      {
        disbursementData.map((disbursement, idx) => (
          <div className="disbursement-card" key={idx}>
          <span>
            {disbursement.totalvalue}<span id="sup">$</span>
          </span>
          <p>Total Value of Disbursement</p>
          <div className="progress-bar">
            <div className="flex-details">
              <span>
                <label>Policy</label>
              </span>
              <span>
                <label>{disbursement.policyValue}</label>
                <span id="min-sup">$</span>
              </span>
            </div>
            <ProgressBar
              completed={disbursement.policyProgress}
              height={"10px"}
              isLabelVisible={false}
              bgColor={"linear-gradient(90deg, #33D69F 0%, #50EDB8 111.47%)"}
            />
          </div>
          <div>
            <div className="flex-details">
              <span>
                <label>Claim</label>
              </span>
              <span>
                <label>{disbursement.claimValue}</label>
                <span id="min-sup">$</span>
              </span>
            </div>
            <ProgressBar
              completed={disbursement.claimProgress}
              height={"10px"}
              isLabelVisible={false}
              bgColor={"linear-gradient(90deg, #713BDB 0%, #A886E9 111.47%)"}
            />
          </div>
        </div>
        ))
      }
   
    </div>
    
  );
};

export default DisbursementCard;
