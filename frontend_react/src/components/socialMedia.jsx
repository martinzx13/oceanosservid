import React from 'react'
import { BsInstagram } from 'react-icons/bs' 
import { FaFacebookF } from 'react-icons/fa' 

function socialMedia() {
  return (
    <div className="app__social">
        <div >
            <BsInstagram/>
        </div>
        <div >
            <FaFacebookF/>
        </div>

    </div>
  )
}

export default socialMedia