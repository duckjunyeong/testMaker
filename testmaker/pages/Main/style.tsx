import styled from "@emotion/styled";

const Href = styled.a`
    margin-right: 25px;
    font-weight: bold;
`
const HeaderWrapper = styled.div`
    width:1440px;
    height:85px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const HeaderRight = styled.div`
    display:flex;
    align-items:center; 
    img {
        width:182px;
        margin-right:15px;
    }
`
export {Href, HeaderRight,HeaderWrapper}