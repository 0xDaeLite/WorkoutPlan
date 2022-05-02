import React from 'react';
import WorkoutPlan from './WorkoutPlan';

//app shows today's exercises and weight/rep requirements
//app allows me to edit the requirements based on what i actually lifted, and submits
//app allows me to add/remove exercises
//app allows me to check historical data/stats

//1. code based on how its supposed to look first
//2. then worry about state changes and the whole nine


function App() {
  return (
    <>
    <WorkoutPlan />
    <button>hamburger menu</button>
    </>
  );
}

export default App;
