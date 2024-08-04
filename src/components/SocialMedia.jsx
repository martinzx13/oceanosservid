import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://www.instagram.com/oceanosservid/" target="_blank">
      <div>
        <BsInstagram />
      </div>
      </a>
      <a href="https://www.facebook.com/oceanos.servid" target="_blank">
      <div>
        <FaFacebookF />
      </div>
      </a>
    </div>
  );
}

export default SocialMedia;
