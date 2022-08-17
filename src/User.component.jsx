import { useState } from "react"
export default function AddUser() {
    let [firstName,setfirstName] = useState("")
    function getValueOfFirstNAME(event) {
        setfirstName(event.target.value)
    }
    let [lastName,setLastName] = useState("")
    function getValueOfLastName(event) {
        setLastName(event.target.value)
    }
    let [age,setAge] = useState("")
    function getValueOAge(event) {
        setAge(event.target.value)
    }
    let [email,setEmail] = useState("")
    function getValueOfEmail(event) {
        setEmail(event.target.value)
    }
    let [password,setpassword] = useState("")
    function getValueOfPassword(event) {
        setpassword(event.target.value)
    }
    let [confirmPassword,setConfirmPassword] = useState("")
    function getValueOfConfirmPassword(event) {
        setConfirmPassword(event.target.value)
        if (password===event.target.value) {
            document.getElementById("PasswordConfirm").style.color="green"
            document.getElementById("PasswordConfirm").innerHTML="Password Are the same"
        }
        else{
            document.getElementById("PasswordConfirm").style.color="red"
            document.getElementById("PasswordConfirm").innerHTML="Password Are not the same"
        }
    } 
    function chackIfPasswordAreTheSame(e) {
        if (password===confirmPassword) {
            return alert(" Wonderful passwrods are the same")
        }
        else{
            e.preventDefault(e)
            return alert("passwrods are not the same")
        }
    }
    return(
        <div>
            <form>
                <input placeholder="First Name" type="text" onChange={(e)=>getValueOfFirstNAME(e)}/>
                <br />
                <input placeholder="Last Name" type="text" onChange={(e)=>getValueOfLastName(e)}/>
                <br />
                <input placeholder="Age" type="text" onChange={(e)=>getValueOAge(e)}/>
                <br />
                <input placeholder="Email" type="text" onChange={(e)=>getValueOfEmail(e)}/>
                <br />
                <input placeholder="Password" type="text" onChange={(e)=>getValueOfPassword(e)}/>
                <br />
                <input placeholder="Confirm Password" type="text" onChange={(e)=>getValueOfConfirmPassword(e)}/>
                <p id="PasswordConfirm"></p>
                <br />
                <button on onClick={(e)=>chackIfPasswordAreTheSame(e)}>click</button>
                <div id="UserTable" >
                <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </thead>
                <tbody>
                    <tr><td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{confirmPassword}</td></tr>
                </tbody>
            </table>
                </div>
            </form>
        </div>
    )
}