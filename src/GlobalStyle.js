import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 62.5%;
    }
    *{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    & body {
        color: #e5e7eb;
        background-color: #000;
    }
    main {
        position: relative;
        overflow-x: hidden;
    }
    .titles {
        position: relative;
        margin: 60px 50px;
    }
    .titles h2:nth-child(1) {
        font-size: 2.5em;
    }
    .titles h2:nth-child(2) {
        font-size: 2.8em;
        transform: translateY(-17px);
    }
    .titles h2 span {
        color: #fef08a;
    }
    .text-info {
        width: 80%;
        margin-left: 3em;
        transform: translateY(-50px);
        letter-spacing: 1.5px;
    }
    .btnMore {
        display: block;
        margin: 10px auto;
        width: 200px;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border: .5px solid #fff;
        background-color: #374151;
        
    }
    .openOrCloseMenu {
        left: 0;
        opacity: 1;
    }

    @media screen and (max-width: 280px) {
        .titles h2:nth-child(1) {
            font-size: 2em;
        }
        .titles h2:nth-child(2) {
            font-size: 2em;
            transform: translateY(-15px);
        }
    }

    @media screen and (min-width: 1000px) {
        .titles {
            margin-top: 180px;
            left: 100px;
        }
        .text-info {
            margin-left: 10em;
        }
    }
    @media screen and (min-width: 1200px) {
        .text-info {
            font-size: 1.3em;
            margin-left: 150px;
        }
    }
`

export default GlobalStyle;