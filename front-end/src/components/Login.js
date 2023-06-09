import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleLogin=async ()=>{
    console.warn(email,password);
    let result=await fetch('http://localhost:5000/login',{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result=await result.json()
    console.warn(result);
    if(result.name){
localStorage.setItem("user",JSON.stringify(result))
navigate("/")

    }
    else{
      alert("Invalid email or password");
    }
  }
  return (
    <div className="login">
      <input
        type="text"
        placeholder="Enter Email"
        className="inputBox"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="inputBox"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="appButton" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
