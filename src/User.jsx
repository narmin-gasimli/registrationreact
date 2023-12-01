import React, { useState } from "react";

const User = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(!e.target.value.endsWith(".com")){
            setEmailErr("Only allow .com")
        }else{
            setEmailErr("");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 5){
            setPasswordErr("write at least 5 characters");
        }else{
            setPasswordErr("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
      <div>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailErr && <p>{emailErr}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordErr && <p>{passwordErr}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
    );
};

export default User;

