import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ margin: 20 }}>
              <h1 className="head-text">
                Asociation Oceanos
                <br />
                Servid
              </h1>
              <p className="p-text">
                Welcome to Oceanoservid, a space where we’re passionate about
                making a meaningful impact on the lives of those we serve. Here,
                you'll discover how our association is dedicated to walking
                alongside individuals, offering them tools and guidance to
                nurture their mental well-being. Whether you're seeking support
                or simply curious about our work, we invite you to explore,
                connect, and join us on this journey toward a healthier, more
                resilient future.
              </p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Harvesting Hope, Cultivating Resilience:"What we do for ourselves dies with us. What we do for others and the world remains and is immortal.</p>
            <p className="p-text">" – Albert Pine"</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map(
          (
            circle,
            index // modificate the images of the circles
          ) => (
            <div className="circle-cpm app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
