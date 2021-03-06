import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { ReactComponent as BigData } from '../../assets/BigData.svg'
import { ReactComponent as DataScience } from '../../assets/DataScience.svg'
import { ReactComponent as MathModel } from '../../assets/MathModel.svg'
import { ReactComponent as Soft } from '../../assets/Soft.svg'


const Services = () => {



  return (
    <div className="main_services">
      <h2 className='main_services_title'>Services</h2>

      <div className="main_grid">

        <ServiceCard
          servicehome={true}
          icon={<Soft />}
          title={"Software Development"}
          description={"Copy With the world moving to the digital domain, you need to make sure your move is a notch above others..."}
          displaybtn={true}
        />
        <ServiceCard
          servicehome={true}
          icon={<DataScience />}
          title={"Data science"}
          description={"We’ll take your data requirements and create powerful analytical modules that help you identify insight gaps, spot..."}
          displaybtn={true}
        />

        <ServiceCard
          servicehome={true}
          icon={<MathModel />}
          title={"Mathematical modelling"}
          description={"Our team of highly professional mathematicians transforms your real-world problems into mathematical formulas and..."}
          displaybtn={true}
        />
        <ServiceCard
          servicehome={true}
          icon={<BigData />}
          title={"Big data solutions"}
          description={"Using mathematical and statistical modeling and simulation Big Data analytics solutions provided by Analysed help you..."}
          displaybtn={true}
        />

      </div>

      <button className="main_services_btn">More</button>


    </div>

  )
}

export default Services