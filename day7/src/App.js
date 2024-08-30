// import { createRoot } from "react-dom/client";
import "./style.css";


// 3.
function App() {
  return (
    <div>
      <Card></Card>
    </div>
  )

}
// 2.
function Card() {
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

// 1.
function Avatar() {
  return <img className="avatar" src="sunflower.jpg" alt="SUNFLOWER🌻" />
}

// 4.
function Intro() {
  return (
    <div>
      <h1>🌻SUNFLOWER🌻</h1>
      <p>
        <h4>"🌻🌻Sunflowers are like friends; they bring color to your world🌻🌻." </h4>
        Quality friends should fill your life with lots of joy, and
        radiate positivity when you are around them, just like sunflowers do.
        <h>"True friends are like bright sunflowers that never fade away even over distance and time."</h>
      </p>
    </div>
  );
}



let skillAndColor = [

  { skill: "REACT", color: "sandybrown" },
  { skill: "HTML", color: "steelblue" },
  {skill:"SQL",color:"palegreen "},
  { skill: "CSS", color: "yellow" },
  { skill: "PYTHON", color: "orange" },
  { skill: "JAVASCRIPT", color: "violet" }

]


function SkillList() {
  return (
    <div className="skill-list">
     {
      skillAndColor.map((el)=>(
          <Skill skill={el.skill} color={el.color} />
      ))
     }


      {/* <Skill skill="REACT" color="orange"/>
      <Skill skill="HTML" color="yellow"/>
      <Skill skill="CSS" color="lightgreen" />
      <Skill skill="PYTHON" color="greenyellow "/>
      <Skill skill="JAVASCRIPT" color="cornflowerblue"/> */}

    </div>
  )
}


function Skill(props){
  return(
    <div className="skill" style={{ backgroundColor: props.color }}>

      <span>{props.skill}</span>
    </div>

  )
}
export default App;


