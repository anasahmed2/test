import React from "react";
import "./style.css";

function Carousel({ StatusBandProjectDetail }) {

  return (
    <div className="carouselContainer">
      <div>
        {StatusBandProjectDetail.map((value, index) =>
          <img key={index} src={value.image} alt="" />
        )}
      </div>
      <div>
        {StatusBandProjectDetail.map((value, index) =>
          <img key={index} src={value.image} alt="" />
        )}
      </div>
    </div>
  );
}

export default Carousel;