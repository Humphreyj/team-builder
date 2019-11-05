import React from 'react';
import Team from '../Team/Team';


const TeamDisplay = (props) => {
    return (
        <div className='team-display'>
            {props.teams.map((team,i) => {
                return (
                    <Team
                    key={i}
                    teamName={team.name}
                    members={team.members} />
                )
                
            })}
        </div>
    );
}

export default TeamDisplay;
