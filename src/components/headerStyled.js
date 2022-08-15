import styled from "styled-components";

const Headers = styled.header`
    position: relative;
    background-color: #B22222;
    width: 100%;
    height: 70px;
    box-shadow: 0 4px 5px #BC8F8F;
    padding: 5px 10px;
    box-sizing: border-box ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__logoContainer {
        color: #fff;
        border-left: 5px solid #fff ;
        width: 100px;
        padding-left: 10px;
    }
    .header__logoContainer p {
        font-weight: bold;
        font-size: 18px;
    }
    .header__logoContainer p:nth-child(2) {
        font-size: 25px;
    }

    .header__btnMenu {
        width: 60px;
        height: 60px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .menuBtn__burger {
        background-color: #fff;
        width: 55px;
        height: 6px;
        border-radius: 5px;
        transition: all .5s ease-in-out;
        box-shadow: 0 2px 5px #DC143C;
    }
    .menuBtn__burger::before,
    .menuBtn__burger::after {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 55px;
        height: 7px;
        border-radius: 5px;
        transition: all .5s ease-in-out;
        box-shadow: 0 2px 5px #DC143C;
    }
    .menuBtn__burger::before {
        transform: translateY(-16px);
    }
    .menuBtn__burger::after {
        transform: translateY(16px);
    }
    .header__btnMenu.open .menuBtn__burger{
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }
    .header__btnMenu.open .menuBtn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .header__btnMenu.open .menuBtn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }
    .openMenu {
        display: block ;
    }

    @media screen and (min-width: 700px) {
        display: flex;
        .header__btnMenu {
            display: none ;
        }
    }
`

export default Headers;