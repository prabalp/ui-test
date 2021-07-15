import React from "react";
import HeroCard from "./HeroCard/HeroCard";
import heroPacket from "../../Pictures/hero/heroDistribution";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      {/* put all the pictures card */}
      {[...Array(4)].map((x, i) => {
        return <HeroCard value={heroPacket[i]} />;
      })}
    </div>
  );
}

export default Hero;
