import styled from "styled-components";

const Menu = styled.nav`
    background-color: #DCDCDC;
    position: absolute;
    margin: 0;
    transform: translateY(326px);
    width: 97%;
    height: 580px;
    display: none;
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        text-align: center;
        font-weight: bold;
    }
    ul li {
        padding: 30px 0;
        font-size: 20px;
    }
    ul li a {
        color: #B22222;
        text-decoration: none ;
        font-family: sans-serif, Arial, Helvetica;
    }
    @media screen and (min-width: 700px) {
        display: flex;
        
        background-color: transparent;
        height: auto;
        transform: translateY(0);
        width: 70%;
        margin-left: 200px;
    }
    ul {
        position: relative;
        display: flex;
        justify-content: space-between;
        
    }
    ul li a {
        color: #fff;
        font-size: 17px;
    }
    @media screen and (min-width: 900px) {
        margin-left: 350px;
    }

`
export default Menu;