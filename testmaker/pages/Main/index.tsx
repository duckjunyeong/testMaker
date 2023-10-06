import React from "react";
import { Href } from "@pages/Main/style";

const Main = () => {
    return(
        <>
        <div style={{width:'1440px', margin:'0 auto', padding:'30px', display:'flex', justifyContent:'space-between'}} >
        <div>
            <Href href="/login">로그인</Href>
            <Href href="/join">회원가입</Href>
        </div>
        <div>
            <Href href="#">문제 만들기</Href>
            <Href href="#">나의 시험지</Href>
        </div>
    </div>

    </>
    )
}


export default Main;