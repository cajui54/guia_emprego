import styled from "styled-components";

export const NavBar = styled.nav`
    position: absolute;
    top: 70px;
    left: 100%;
    opacity: 0;
    z-index: 2;
    width: 100%;
    height: 45rem;
    background-color: #020617;
    display: flex;
    flex-direction: column;
    transition: all .5s ease-in-out;
    a {
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100%;
        display: block;
        border: none;
        padding: 3rem 0;
        margin: 5px 0;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
    }
    .active {
        color: #fef08a;
    }
    @media screen and (min-width: 950px) {
        background-color: transparent;
        position: relative;
        overflow: hidden;
        top: 0px;
        left: 0;
        width: 70%;
        height: 80%;
        opacity: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        a {
            font-size: .9rem;
            transition: all .5s ease-in-out;
        }
        a:hover {
            color: #fef08a;
        }
        a:first-child, a:last-child {
            width: 10%;
            padding: 0;
            margin: 0 40px;
        }
  

    }
`;

