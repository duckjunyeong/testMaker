import axios from "axios";
import React, { useCallback, useState } from "react";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value)
}, [password]);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value)
}, [password]);

  const checkLogin = useCallback((e) =>{
    e.preventDefault();
    axios.post("/api/user/login", {email,password})
    .then((response) => {
        console.log(response.data.nickname)
    })
    .catch((error) => {
        console.error(error)
    })
  } , [email, password])

    return(
        <>
            <form onSubmit={checkLogin}>
                <input type="email" id="email" name="email" onChange={changeEmail}/>
                <input type="password"  id="password"name="password" onChange={changePassword}/>
                <button>로그인하기</button>
            </form>
                <a href='/join'>회원가입</a>
        </>
    )
}


export default Login;
