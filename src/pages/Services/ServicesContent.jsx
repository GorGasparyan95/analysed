import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { ReactComponent as BigData } from '../../assets/BigData.svg'
import { ReactComponent as DataScience } from '../../assets/DataScience.svg'
import { ReactComponent as MathModel } from '../../assets/MathModel.svg'
import { ReactComponent as Soft } from '../../assets/Soft.svg'

const ServicesContent = () => {
  return (
    <div className="services">
      <div className="services_header">
        <h1 className="services_title">Services</h1>
        <h2 className="services_description">“Mathematical and statistical modeling and simulation”</h2>
        <p className="services_text">Big Data analytics solutions provided by Analysed help you develop an in-depth understanding of advanced analytic techniques to manage and process huge data sets.</p>
      </div>
      <div className="services_grid">
        <ServiceCard
          icon={<Soft />}
          title={"Software Development"}
          description={"With the world moving to the digital domain, you need to make sure your move is a notch above others. You can reach our software development company to get an engaging and customer-centric system that would help you earn a strong customer base. Your website design and navigation play an important role in building your reputation in the market. The team of professionals understands your business needs and reflects a blend of creative and technically advanced website design and development that could help you generate great conversions."}
        />
        <ServiceCard
          icon={<DataScience />}
          title={"Data science"}
          description={"We’ll take your data requirements and create powerful analytical modules that help you identify insight gaps, spot opportunities, and tighten your efficiencies through tools like automation, process optimization, and predictive analytics. By improving data management, you’ll be empowered to make smarter business decisions while navigating risks and decreasing your operational costs. We transform how you consume data by building and designing Information Systems that offer solutions for data collection, management and analysis."}
        />

        <ServiceCard
          icon={<MathModel />}
          title={"Mathematical modelling"}
          description={"Our team of highly professional mathematicians transforms your real-world problems into mathematical formulas and gives solutions for businesses, helps to develop scientific insights and make effective decisions. Our efforts are devoted to mathematical modelling in productions, operations and finances."}
          line2={" We will help you find out the difficult chemical, physical and other processes in your production by creating simulating models. Our scientists will develop mathematical models based on your data and help save a huge amount of resources on laboratory experiments. We will contribute to launching your products several times faster, and increase the efficiency of your production."}
        />
        <ServiceCard
          icon={<BigData />}
          title={"Big data solutions"}
          description={"In this highly competitive world, we often see many companies struggling to manage data. To harness the full potential of big data, you need to develop a deep understanding of it."}
          line2={"Mathematical and statistical modeling and simulation Big Data analytics solutions provided by Analysed help you develop an in-depth understanding of advanced analytic techniques to manage and process huge data sets. Our services can help your businesses break data silos and extract valuable information to drive business efficiencies and grab opportunities on a real-time basis."}
          line3={" In the ever-expanding world of technology where the smallest of information can thrive your business, the importance of big data analytics cannot be undermined. With big data analytics, companies can enhance their decision-making abilities and explore plenty of opportunities waiting to be tapped."}
        />
      </div>
    </div>
  )
}

export default ServicesContent