import React from "react";
import Header from "../../components/Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import MainFooter from "./MainFooter";


const Homepage = () => {
  return (
    <div>
      <div className="head_wrapper">
        <Header />
        <div className="head_main">
          <div className="head_content">
            <h1 className="head_title">We are a team of</h1>
            <h2 className="head_title anim">developers</h2>
            <p className="head_text">We combine the world’s most powerful mathematics<br></br> engine with business, industry and production.</p>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <MainFooter />
    </div>

  )
}

export default Homepage

