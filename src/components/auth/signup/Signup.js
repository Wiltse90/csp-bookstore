import React, { useState } from "react";
import Users from "./data.json";
import "./style.css";

const Signup = (props) => {
    const [data] = useState(Users);
    const [userMsg, setMsg] = useState("");

    const getData = () => {
        const db = [];

        data.map((users) => {
            db.push(users.uname);
        });

        return db;
    } 

    const usernames = getData();

    const [user, setUser] = useState({
        fName:props.user.fName,
        lName:props.user.lName,
        uname:props.user.uname,
        pwd:props.user.pwd,
    })

    const checkUser = (e) => {
        user.uname = e.target.value;
        if(usernames.includes(user.uname)) {
            setMsg(<h4 id="warning">Username is already taken</h4>);
        } else {
            setMsg("");
        }
    }

    
    return (
        <>
        <form className="frmSignup">
        <h1>Register</h1>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"  onChange={(e) => user.fName = e.target.value} defaultValue={props.user.fName}/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" onChange={(e) => user.lName = e.target.value } defaultValue={props.user.lName}/><br/>
        <label for="uname">Username:</label><br/>
        <input type="text" id="uname" name="uname" onChange={(e) => checkUser(e)} defaultValue={props.user.uname}/><br/>
        <label for="password">Password:</label><br/>
        <input type="text" id="password" name="password" onChange={(e) => user.pwd = e.target.value} defaultValue={props.user.pwd}/><br/><br/>
        <input type="submit" value="Submit" />

        <p className="msgAuth">Already a member?
        <button onClick={() => {
            props.parentCallback(user);

        }}>Login</button>
        </p>
        {userMsg}
        </form> 
        </>
    )
}

export default Signup;