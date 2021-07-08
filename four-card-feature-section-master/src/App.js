import './App.css';
import './css/style.css';

import teambuilder from "./images/icon-team-builder.svg";
import supervisor from "./images/icon-supervisor.svg";
import calculator from "./images/icon-calculator.svg";
import karma from "./images/icon-karma.svg";

function App() {
  return (
    <div className="areas">
        <div className="pagetitle">
          <h1 className="title">Reliable, efficient delivery </h1> 
          <h1>Powered by Technology</h1> 
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>  
        </div>
        <div className="boxtop">
          <h3>Team Builder</h3> 
          <p>Scans our talent network to create the optimal team for your project</p>
          <img alt="team-builder" src= {teambuilder} /> 
        </div>
        <div className="boxleft">
           <h3>Supervisor</h3>
           <p>Monitors activity to identify project roadblocks</p>
           <img alt="supervisor" src= {supervisor} />
        </div>
        <div className="boxright">
          <h3>Calculator</h3>
           <p>Uses data from past projects to provide better delivery estimates</p>
           <img alt="calculator" src= {calculator} />
        </div>
        <div className="boxbottom"> 
          <h3>Karma</h3> 
          <p className="text">Regularly evaluates our talent to ensure quality</p>
          <img alt="karma" src= {karma} />
        </div>  
    </div>
  );
}

export default App;
