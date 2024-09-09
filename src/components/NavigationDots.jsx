import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "our team", "contact"].map(
        (item, index) => (
          <Link
            to={`/${item === "our team" ? "team" : item}`} // Map "our team" to "team" for routing
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
