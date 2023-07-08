import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: black;
    //background-color: #374151;
    box-shadow: rgba(0,0,0,.15) 0px -2px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    a {
        font-family: 'Montserrat', sans-serif, Arial, Helvetica;
        text-decoration: none;
        margin-left: 20px;
        color: #fff;
        border-left: 3px solid #fff;
        padding-left: 10px;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    a:hover {
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

    @media screen and (min-width: 820px) {
        
    }
    
`
export default HeaderStyled;