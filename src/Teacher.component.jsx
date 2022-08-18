import { useState } from "react";
export default function Teacher({teacher}) {
    let [firstName,setFirstName]=useState(teacher.F_name)
    let [lastName,setLastName]=useState(teacher.L_name)
    const changeToMyName=()=>setFirstName(lastName="Daniel")
    const changeToMyLastName=()=>setLastName(lastName="Malede")
    const namesToUpperCase =()=>setFirstName(firstName.toUpperCase())+setLastName(lastName.toUpperCase())
    return(
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <button onClick={changeToMyName}>change to my name</button>
            <button onClick={changeToMyLastName}>change to my last name</button>
            <button onClick={namesToUpperCase}>Convert toUpperCase</button>


        </div>
    )

    
}