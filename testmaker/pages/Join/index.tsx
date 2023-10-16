import React, {useCallback, useState} from "react";
import axios from "axios";

const Join = () => {
const [email, setEmail] = useState('');
const [nickname, setNickname] = useState('');
const [password, setPassword] = useState('');

const createUser = useCallback((e)=>{
    e.preventDefault();
    console.log(email, nickname, password)
    axios.post("http://localhost:3085/api/user", {email,nickname, password})
    .then((response) => {   
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })
} , [email,password,nickname])

const changeEmail = useCallback((e) => {
    setEmail(e.target.value)
}, [email]);

const changeNickname = useCallback((e) => {
    setNickname(e.target.value)
}, [nickname]);

const changePassword = useCallback((e) => {
    setPassword(e.target.value)
}, [password]);

    return(
        <>
            <form onSubmit={createUser}>
                <input type="email" placeholder="email" id="email" name="email" value={email} onChange={changeEmail}></input>
                <input type="text"  placeholder="nickname" id="nickname" name='nickname' value={nickname} onChange={changeNickname}/>
                <input type="password" placeholder="password"  id="password" name='password' value={password} onChange={changePassword}/>
                <button>회원가입하기</button>
            </form>        
        </>
    )
}

export default Join;