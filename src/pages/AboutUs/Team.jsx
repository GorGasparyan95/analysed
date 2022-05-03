import React from "react";
import TeamCard from "../../components/TeamCard";
import { teamCardInfo } from "../../constants";


const Team = () => {
  return (
    <div className="aboutus_team">
      <h2 className="aboutus_team_title">Team</h2>
      <div className="aboutus_team_content">
        {teamCardInfo.map((info, i) => (
          <div key={i}>
          <TeamCard src={info.src}
            srcColor={info.srcColor}
            name={info.name}
            position={info.position} />
            </div>
        ))}
      </div>
      <button className="aboutus_tean_btn">
        More
      </button>
    </div>
  )
}

export default Team