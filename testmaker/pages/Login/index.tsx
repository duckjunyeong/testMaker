import React from "react";


const Login = () => {


    return(
        <>
            <form action="POST">
                <input type="email" name="email"/>
                <input type="password" name="password" />
                <button>로그인하기</button>
            </form>
                <a href='/join'>회원가입</a>
        </>
    )
}


export default Login;
