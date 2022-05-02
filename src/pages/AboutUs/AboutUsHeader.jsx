import React from "react";
import Header from "../../components/Header";


const AboutUsHeader = () => {
  return (
    <div className="aboutus_header">
      <Header />
      <div className="aboutus_bg">
        <div className="aboutus_title_wrapper">
          <h2 className="aboutus_title_about">About</h2>
          <h2 className="aboutus_title_us">us</h2>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHeader