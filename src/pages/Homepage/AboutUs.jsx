import React from "react";

const AboutUs = () => {
  return(
     <div className="wrapper_main_about">
       <div className="main_about_content">
         <h2 className="main_about_title">About us</h2>
         <p className="main_about_text">At Analysed we think outside the square and utilize creativity,innovation and skills to bring our clients a superior service every time. Every business is different and our clients come from diverse backgrounds so each project requires a new approach.</p>
         <p className="main_about_text">We take pride in knowing our clients and their business, making it a priority part of our overall process. Analysed provides modern, innovative solutions to meet today’s challenges.</p>
         <button className="main_btn">More</button>
       </div>
       <div className="main_about_img">
       <img src="./assets/images/people.png" className="main_people_about"/>
       </div>
     </div>
  )
}

export default AboutUs