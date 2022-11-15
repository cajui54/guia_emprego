import styled from "styled-components";

const Menu = styled.nav`
    background-color: #DCDCDC;
    position: absolute;
    margin: 0;
    transform: translateY(326px);
    width: 97%;
    height: 580px;
    display: none;
    z-index: 5;
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        text-align: center;
        
    }
    ul li {
        text-align: center;
        padding: 30px 0;
        font-size: 20px;
    }
    ul li a {
        font-weight: bold;
        color: red;
        text-decoration: none ;
        font-family: sans-serif, Arial, Helvetica;
    }
    @media screen and (min-width: 700px) {
        display: block ;
        width: 70%;
        height: 80px;
        position: relative;
        top: -330px;
        right: 250px;
        background-color: transparent;
        ul {
            display: flex;
            justify-content: space-between;
            height: 80px;
            margin-left: 200px;
            
        }
        ul li a {
            color: #fff;
        }
    }
    @media screen and (min-width: 1000px) { 
        ul {
            margin-left: 350px;
        }
    }

`
export default Menu;