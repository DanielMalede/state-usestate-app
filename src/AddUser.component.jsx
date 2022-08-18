import { useState } from "react";
export default function AddUser({firstname,lName,Age,Email,Password}) {
  const [firstName, setfirstName] = useState(firstname);
  function getValueOfFirstName(event) {
    setfirstName(event.target.value);
    if (firstName!==event.target.value&&""!==event.target.value) {
        document.getElementById("f_name").style.color="red"
        document.getElementById("f_name").innerHTML="bad"
    }
    else{
        document.getElementById("f_name").style.color="green"
        document.getElementById("f_name").innerHTML="good"
    }
  }
  const [lastName, setLastName] = useState(lName);
  function getValueOfLasttName(event) {
    setLastName(event.target.value);
    if (lastName!==event.target.value&&""!==event.target.value) {
        document.getElementById("l_name").style.color="red"
        document.getElementById("l_name").innerHTML="bad"
    }
    else{
        document.getElementById("l_name").style.color="green"
        document.getElementById("l_name").innerHTML="good"
    }
  }
  const [age, setAge] = useState(Age);
  function getValueOfAge(event) {
    setAge(event.target.value);
    if (age!==event.target.value&&""!==event.target.value) {
        document.getElementById("age").style.color="red"
        document.getElementById("age").innerHTML="bad"
    }
    else{
        document.getElementById("age").style.color="green"
        document.getElementById("age").innerHTML="good"
    }
  }
  const [email, setEmail] = useState(Email);
  function getValueOfEmail(event) {
    setEmail(event.target.value);
    if (email!==event.target.value&&""!==event.target.value) {
        document.getElementById("email").style.color="red"
        document.getElementById("email").innerHTML="bad"
    }
    else{
        document.getElementById("email").style.color="green"
        document.getElementById("email").innerHTML="good"
    }
  }
  const [password, setPassword] = useState(Password);
  function getValueOfPassword(event) {
    setPassword(event.target.value);
    if (password!==event.target.value&&""!==event.target.value) {
        document.getElementById("password").style.color="red"
        document.getElementById("password").innerHTML="bad"
    }
    else{
        document.getElementById("password").style.color="green"
        document.getElementById("password").innerHTML="good"
    }
  }
  function preventDefault(e) {
    e.preventDefault();
  }
  function chackForm() {
    let userArray = [firstName,lastName,age,email,password]
    let PorpsArray = [firstname,lName,Age,Email,Password]
    let x = ""
    userArray.map((item,index)=>{
        if (item===PorpsArray[index]||item==="") {
            x="out"
        }
    })
    if (x==="out") {
        alert("Please fill all inputss")
    }
    else{
      alert("good")
    }
  }
  // function chackIfFormIsFull() {
  //   switch ("") {
  //     case firstName:
  //       return alert("Please fill all inputs");
  //     case lastName:
  //       return alert("Please fill all inputs");
  //     case age:
  //       return alert("Please fill all inputs");
  //     case email:
  //       return alert("Please fill all inputs");
  //     case password:
  //       return alert("Please fill all inputs");
  //     default:

  //        else{
  //       return alert("Please fill all inputs");
  //        }
  //   }
  // }
  return (
    <div>
      <form onSubmit={(e) => preventDefault(e)}>
        <input type="text" onChange={(e) => getValueOfFirstName(e)} />
        <p id="f_name"></p>
        <br />
        <input type="text" onChange={(e) => getValueOfLasttName(e)} />
        <p id="l_name"></p>
        <br />
        <input type="number" onChange={(e) => getValueOfAge(e)} />
        <p id="age"></p>
        <br />
        <input type="text" onChange={(e) => getValueOfEmail(e)} />
        <p id="email"></p>
        <br />
        <input type="text" onChange={(e) => getValueOfPassword(e)} />
        <p id="password"></p>
        <br />
        <button onClick={chackForm}>click</button>
      </form>
    </div>
  );
}
