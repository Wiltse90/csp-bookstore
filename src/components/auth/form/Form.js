import { useCallback, useState, createContext } from "react";
import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import './style.css';


const Form = () => {
    const LoginContext = createContext();
    const [login, setLogin] = useState("");

    const [user, setUser] = useState(
        {
            uname:"",
            pwd:"",
            fName:"",
            lName:""
        }
    );


    const callback = useCallback((user) => {
        setRegistered(registered => !registered);
        setUser(user);
    }, []);

    const [registered, setRegistered] = useState(true);
    const [frmAuth, setAuth] = useState(<Login parentCallback={callback} user={user}/>);
    
    const getForm = () => {
        return registered ? <Login parentCallback={callback} user={user}/> : <Signup parentCallback={callback} user={user}/>;
    }
    return (   

        <div id="authContainer">
        <LoginContext.Provider value={setLogin} >
            {getForm()}
        </LoginContext.Provider>
        </div>
    )
}

export default Form;