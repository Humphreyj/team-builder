import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const Team = (props) => {
    return (
        <div className='team'>

       <h1 className="team-name">{props.teamName}</h1>
            {
              props.members.map((member,i) => {
                  return (
                      <TeamMember
                      key={i}
                      name={member.name}
                      role={member.role}
                      email={member.email}
                       />
                  )
              })
            }
        </div>
    );
}

export default Team;
