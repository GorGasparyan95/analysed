import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";

const Homepage = () => {
    return (
        <div> 
          <div className="header_bg">
            <Header />
              <div className="head-title">
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
      <AboutUs />
     </div>
       
    )
}

export default Homepage