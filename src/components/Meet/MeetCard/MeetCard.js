import React from "react";
import "./MeetCard.css";

function MeetCard(props) {
  return (
    <div className="meetCard">
      <img src={props.value} alt="bam" />
      <div className="meetCardText">
        <div className="meetCardTextA">Patronum Name</div>
        <div className="meetCardTextB">Patronus: Stag</div>
      </div>
    </div>
  );
}

export default MeetCard;
