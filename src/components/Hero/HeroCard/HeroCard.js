import React from "react";

function HeroCard(props) {
  return (
    <div className="heroCard">
      <img src={props.value} alt="photos" />
      <div className="heroCardBottomLeft">Text</div>
    </div>
  );
}

export default HeroCard;
