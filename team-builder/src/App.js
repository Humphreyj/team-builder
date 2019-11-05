import React, { useState } from 'react';
import './App.css';
import TeamDisplay from './components/TeamDisplay/TeamDisplay';

function App() {
const [teamsData, teamsDataHandler] =useState({
  teams: [
    {
      name: 'Team First',
      id: 0,
      members: [
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
        },
        {
          name: 'Dwayne Johnson',
          role: 'The Rock',
          email: 'Unknown'
        }
      ]
    },
    {
      name: 'Team Second',
      id: 0,
      members: [
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
        },
        {
          name: 'Dwayne Johnson',
          role: 'The Rock',
          email: 'Unknown'
        }
      ]
    }
  ]
    
})
  return (
    <div className="App">
      <TeamDisplay
      teams={teamsData.teams} />
     
    </div>
  );
}

export default App;
