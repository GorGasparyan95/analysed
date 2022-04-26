import React from "react";
import Header from "../../components/Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
     <Header />
     <div className="head_main">
       <div className="head_content">
       <h1 className="head_title">We are a team of</h1>
       <h2 className="head_title anim">developers</h2>
       <p className="head_text">We combine the world’s most powerful mathematics<br></br> engine with business, industry and production.</p>
       </div>
     </div>
     <AboutUs />
     <Services />
     <Footer />
    </div>

  )
}

export default Homepage

{/* <div className="header_bg">
<Header />
<div className="head_title">
  <h2 className="team">
    We are a team of
  </h2>
  <h2 className="dev">
    developers
  </h2>
  <h3 className="combine">
    We combine the world’s most powerful mathematics <br></br>engine with business, industry and production.
  </h3>
</div>
</div>
<AboutUs /> */}