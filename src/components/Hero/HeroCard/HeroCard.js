import React from "react";
import "./HeroCard.css";

function HeroCard(props) {
  return (
    <div className="heroCard">
      <img src={props.value} alt="photos" width="928px" height="699px" />
      <div className="heroCardBottomLeft">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>
      <div className="heroCardBottomRight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>
    </div>
  );
}

export default HeroCard;
