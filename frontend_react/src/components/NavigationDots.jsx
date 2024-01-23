import { color } from "framer-motion";
import React from "react";

const NavigationDots = () => {
  return (
    <div className="app__navegation">
      {["Home", "About Us", "our work", "blog", "testimonials", "contact us"].map((item, index) => (
        
          <a 
          href={`#${item}`} 
          key={item + index}
          className="app__navigation-dot"
          style={active == item ? {backgroundColor:'#313BAC' } : { }}
          >
            {item}
          </a>
      ))}
    </div>
  );
};

export default NavigationDots;
