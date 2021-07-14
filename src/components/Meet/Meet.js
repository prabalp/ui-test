import React from "react";
import picturePacket from "../../Pictures/meets/meetDistributer";
import MeetCard from "./MeetCard/MeetCard";
import "./Meet.css";

function Meet() {
  return (
    <div className="meet">
      <div className="meetText">Meet Our Patronums</div>
      <div className="meetSlider">
        {[...Array(6)].map((x, i) => {
          return (
            <div className="meetCard">
              <MeetCard value={picturePacket[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meet;
