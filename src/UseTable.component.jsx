import { useState } from "react";

export default function PrintUserTable() {
  let [userArray, setUserArray] = useState({});
  function userTable() {
    let arrayUser = []
    setUserArray(
       arrayUser = [{
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
    );
    
    arrayUser.map((item)=>console.log(item))
  }
  return(
    <div>
        {/* <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <tbody>
            </tbody>
        </table> */}
        <button onClick={userTable}>click</button>
    </div>
  )
}
