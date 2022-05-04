import React from "react";
import { ReactComponent as Linkedin } from '../../assets/in.svg'
import { ReactComponent as Linkedin2 } from '../../assets/in2.svg'


const TeamCard = ({ src, srcColor, name, position }) => {
  return (
    <div className="teamcard">
        <img src={ src } alt="marina" className="teamcard_image"/>
        <img src={ srcColor} alt="marina" className="teamcard_image_color"/>
      <h3 className="teamcard_title">{ name }</h3>
      <p className="teamcard_text">{ position }</p>
      <Linkedin className="teamcard_svg" />
      <Linkedin2 className="teamcard_svgcolor" />
    </div>

  )
}

export default TeamCard