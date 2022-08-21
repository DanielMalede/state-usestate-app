import { useState } from "react";
import Teacher from "./Teacher.component";
import Student from "./Student.component";
export default function CourseFun() {
    let [arraySubj,setarraySubj]=useState(["Football","Basketball","tenis","Football","hokey"])
    let [stusent,setStudent]= useState([])
    let [teacher,setTeacher]= useState({F_name:"N/A",L_name:"N/A"}) 
    const ChangeStudentArray =()=>setStudent((stusent)=>{return[...stusent,{F_name:"Daniel",L_name:"Malede",Age:25},{F_name:"Lior",L_name:"David",Age:26},{F_name:"Or",L_name:"Gedamo",Age:24},{F_name:"Lior",L_name:"Dawwit",Age:26}]})
    const addNewTOSubj = ()=>setarraySubj((arraySubj)=>{return[...arraySubj,"New"]})
    const getValueOfF_name = (e)=>{setStudent(e.target.value)}
    const addF_name=()=>setStudent([...ChangeStudentArray])
    const hendlerForm=(e)=>e.preventDefault()
    return(
        <div>
            {arraySubj.map((item)=><p>{item}</p>)}
            <Teacher teacher={teacher}/>
            <br />
            <button onClick={ChangeStudentArray}>add to student array</button>
            <br/>
            <button onClick={addNewTOSubj}>add "New" to subj</button>
            {/* {stusent.map(()=><Student/>)} */}
            <form onSubmit={hendlerForm}>
                <input type="text"   onChange={(e)=>getValueOfF_name(e)}/>
                <button onClick={addF_name}>add name</button>
            </form>
        </div>
    ) 
}