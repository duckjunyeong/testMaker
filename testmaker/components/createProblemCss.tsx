import styled from "@emotion/styled";

const Div = styled.div`
    width:1200px;
    height:600px;
    background-color:white;
    border-radius: 15px;
`
const Wrapper = styled.div`
    position: absolute;
    display:flex;
    justify-content:center;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.1);

`

const TitleInput = styled.input`
    width: 800px;
    height: 40px;
    border: none;
    border-bottom: 2px solid black;
    font-size: 23px;
    &:focus{
        outline:none
    };
}
`
const ProblemSovingInput = styled.input`
    width:300px;
    margin-right:15px;
    marign-bottom:10px;
    border: none;
    border-bottom: 2px solid black;
    font-size: 15px;
    &:focus{
        outline:none
    };
`
export {Div, Wrapper, TitleInput,ProblemSovingInput}