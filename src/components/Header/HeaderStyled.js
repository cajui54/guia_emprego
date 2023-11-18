import styled from "styled-components";

const HeaderStyled = styled.header`
    position: relative;
    padding: 0 5px;
    width: 100%;
    height: 70px;
    background-color: black;
    
    box-shadow: rgba(0,0,0,.15) 0px -2px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    .containerLogo {
        font-family: 'Montserrat', sans-serif, Arial, Helvetica;
        text-decoration: none;
        margin-left: 20px;
        color: #fff;
        border-left: 3px solid #fff;
        padding-left: 10px;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .containerLogo:hover {
        color: #64748b;
        border-left: 3px solid #64748b;
    }
    h1, h2{
        font-weight: bold;
        font-size: 20px;
    }
    h1 span, h2 span {
        font-weight: bold;
        color: #fef08a;
    }
    h2 {
        font-size: 13px;
    }

    @media screen and (min-width: 950px) {
        position: fixed;
        z-index: 2;
    }
`
export default HeaderStyled;