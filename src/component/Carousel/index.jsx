import React from "react";
import "./style.css";

function Carousel({ items, element }) {
  const carouselmap= [items]
  return (
    <div className="carouselContainer">
      <div>
        {carouselmap?.length > 0 &&
          carouselmap.map((item, index) => 
              <img
                key={`clientLogo-${index}`}
                alt={item.alt || "carousel image"}
                src={item.image}
              />
             )
          }
      </div>
      <div>
        {carouselmap?.length > 0 &&
          carouselmap.map((item, index) => {
            console.log(item.image)
            return (
              <img
                key={`clientLogo-${index}`}
                alt={item.alt || "carousel image"}
                src={item.image}
              />
             );
          })} 
      </div>
    </div>
  );
}

export default Carousel;