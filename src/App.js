import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";
  
const data = {
    "properties" : [
    {  
        id: 1,
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
        id: 2,
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
        id: 3,
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight."
    },
    {
        id: 4,
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        id: 5,
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
]
}

function App() {
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
            <Slides            
            values = {data.properties}/>
            </div>
        </div>
    );
}

export default App;
