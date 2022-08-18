import { useState } from "react";

export default function PrintUserTable() {
  let [userArray, setUserArray] = useState([]);
  const userTable =()=> {
    setUserArray((userArray)=>{
                return [...userArray,{
                F_name: "daniel",
                L_name: "malnede",
                Age: "25",
                Email: "daniel@gmail.com",
                Password: "123456",
              },
              {
                  F_name: "daniel",
                  L_name: "mal ede",
                  Age: "25",
                  Email: "daniel@gmail.com",
                  Password: "123456",
              },
              {
                  F_name: "daniel",
                  L_name: "malede",
                  Age: "25",
                  Email: "daniel@gmail.com",
                  Password: "123456",
              },
              {
                  F_name: "daniel",
                  L_name: "malede",
                  Age: "25",
                  Email: "daniel@gmail.com",
                  Password: "123456",
              },
              {
                  F_name: "daniel",
                  L_name: "malede",
                  Age: "25",
                  Email: "daniel@gmail.com",
                  Password: "123456",
              
                }]
            }
             
      
            ) 
            // {
            //   userArray.map((item)=>
            //   document.getElementById("jjj").innerHTML=`<h1>{item}</h1>` )  
            // }
  }
  return (
    <div>
      <button onClick={userTable}>click</button>
        <div id="jjj"></div>
    </div>
  );
}
