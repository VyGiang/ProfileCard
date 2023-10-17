import React from "react";
import  ReactDOM  from "react-dom/client";
import"./styles.css";


function App() {
    return (
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    );
  }

function Avatar(){
    return <img  className="avatar" src="avatar.jpg" alt="image" />;
}

function Intro() {
    return (
      <div>
        <h1 >Vy Giang</h1>
        <p >Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
      </div>
    );
  }

function SkillList(){
    return (
        <div className="skill-list">
            <Skill skill="HTML+CSS" emoji="💪" color="blue" />
            <Skill skill="React" emoji="💪" color="red" />
            <Skill skill="JavaScript" emoji="💪" color="yellow" />
            <Skill skill="Django" emoji="💪" color="pink" />
        </div>
    );
}
function Skill(progs){
    console.log(progs)
    return (
       <div className="skill" style={{backgroundColor: progs.color }} >
            <span>{progs.skill}</span>
            <span>{progs.emoji}</span>
       </div> 
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)