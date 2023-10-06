import React from "react";


const Join = () => {


    return(
        <>
            <form action="POST">
                <input type="email" placeholder="email" name="email"></input>
                <input type="text"  placeholder="nickname" name='nickname'/>
                <input type="password" placeholder="password"  name='password'/>
                <button>회원가입하기</button>
            </form>        
        </>
    )
}

export default Join;