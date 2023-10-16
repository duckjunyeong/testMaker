import axios from "axios";
import React, { useCallback, useState } from "react";
import fetcher from "@utils/fetcher";
import useSWR from "swr";
import { Redirect } from "react-router";

const Login = () => {
  const { data, error, mutate } = useSWR("http://localhost:3085/api/user", fetcher, {
    dedupingInterval: 20000,
  });
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
    axios.post("http://localhost:3085/api/user/login", {email,password},  {
      withCredentials:true,
    })
    .then((response) => {
      mutate(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
  } , [email, password])
  if(data){
    console.log(data)
    return <Redirect to='/'></Redirect>
  }
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
