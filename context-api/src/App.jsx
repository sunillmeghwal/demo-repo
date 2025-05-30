import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";



export default function App() {

  const[subject, setSubject] = useState('');


  return (
 <div style={{backgroundColor:'yellow',padding:'10px'}}>

  <SubjectContext.Provider value={subject}>
  <select onChange={(e) => setSubject(e.target.value)} defaultValue={subject}>
  console.log(value,defaultValue)
  <option value="Select Subject">Select Subject</option>
    <option value="English">English</option>
    <option value="Maths">Maths</option>
    <option value="Science">Science</option>
    <option value="History">History</option>
  </select>
    <h1>Context API</h1>
    <button onClick={() => setSubject('')}>Clear Subject</button>
  <College/>
  </SubjectContext.Provider>
 </div>
  )
}


