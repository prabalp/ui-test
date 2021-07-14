import React from "react";
import "./Benifits.css";
import nature from "../../Pictures/Pic5.png";

function Benifits() {
  return (
    <div className="benifits">
      <div className="benifitsImage">
        <img src={nature} alt="nature" />
      </div>
      <div className="benifitsText">
        <div className="benifitsTextA">Benefits of The Patronus</div>
        <div className="benifitsTextB">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          euismod lacinia at quis risus sed vulputate odio. Blandit volutpat
          maecenas volutpat blandit aliquam. Non tellus orci ac auctor augue.
          Tincidunt id aliquet risus feugiat in ante. Nunc consequat interdum
          varius sit amet mattis vulputate enim. Scelerisque fermentum dui
          faucibus in ornare quam viverra orci. Diam quam nulla porttitor massa
          id neque. Nec feugiat in fermentum posuere urna nec. Arcu risus quis
          varius quam. Odio tempor orci dapibus ultrices. Neque laoreet
          suspendisse interdum consectetur libero id. Massa enim nec dui nunc.
          Viverra vitae congue eu consequat ac felis. Erat velit scelerisque in
          dictum non consectetur. Nisl purus in mollis nunc sed id. Amet tellus
          cras adipiscing enim eu. Sit amet consectetur adipiscing elit duis
          tristique. Orci phasellus egestas tellus rutrum tellus. At auctor urna
          nunc id cursus. Venenatis cras sed felis eget velit aliquet. Lacus
          laoreet non curabitur gravida arcu ac. Ut etiam sit amet nisl purus
          in. Eget nulla facilisi etiam dignissim diam quis. Dignissim cras
          tincidunt lobortis feugiat. Orci nulla pellentesque dignissim enim
          sit. Sit amet nisl purus in. Ut eu sem integer vitae justo eget magna
          fermentum. Purus gravida quis blandit turpis cursus. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt. Arcu bibendum at
          varius vel pharetra. Volutpat lacus laoreet non curabitur gravida arcu
          ac tortor. At lectus urna duis convallis convallis.
        </div>
        <div className="benifitsTextButton">
          <span>Register for the Patronum Programme</span>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
