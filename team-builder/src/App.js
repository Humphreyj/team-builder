import React, { useState } from 'react';
import './App.css';
import TeamForm from './components/TeamForm/TeamForm';
import TeamDisplay from './components/TeamDisplay/TeamDisplay';

function App() {
const [teamData, teamDataHandler] =useState([
  
    
        {
          name: 'Brian Taveras',
          role: 'Standard Overachiever',
          email: 'TaverasB@Lambda.com'
        },
        {
          name: 'Jules',
          role: 'Full Stack Developer',
          email: 'ulesJ@Lambda.com'
        },
        {
          name: 'Joshua Humphrey',
          role: 'Full Stack Developer',
          email: 'HumphreyJ@Lambda.com'
        }
      
    
  ])

const addTeamMember = (member) => {
  const newMember = teamDataHandler([...teamData,member]);
}
  return (
    <div className="App">
      <TeamForm 
      addTeamMember={addTeamMember}
      team={teamData} />
      <TeamDisplay
      team={teamData} />
     
    </div>
  );
}

export default App;
