import React, { useState, createContext, useContext } from "react";
import { UserContext } from "../../../UserContext";

const Login = (props) => {
    const {value, setValue} = useContext(UserContext)


    const [user, setUser] = useState({
        fName:props.user.fName,
        lName:props.user.lName,
        uname:props.user.uname,
        pwd:props.user.pwd,
    })

    return (
        <form className="frmLogin" action="http://localhost:5000/api/users/login" method="POST">
        <h1>Login</h1>
        <label for="uname">Username:</label><br/>
        <input type="text" id="email" name="email" onChange={(e) => user.uname = e.target.value} defaultValue={props.user.uname} /><br/>
        <label for="password">Password:</label><br/>
        <input type="text" id="password" name="password" onChange={(e) => user.pwd = e.target.value} defaultValue={props.user.pwd}/><br/><br/>
        

        <input type="submit" value="Submit" onClick={() => value.parentCallback('gg')}/>
        
        <p className="msgAuth">Not registered? 
        <button onClick={() => {
            props.parentCallback(user);
        }}>Register</button>
        </p>

        </form>
    )
}

export default Login;