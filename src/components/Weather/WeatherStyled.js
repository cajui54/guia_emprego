import styled from "styled-components";

const WeatherStyled = styled.div`
    width: 100%;
    min-height: 40px;
    font-family: 'Montserrat', sans-serif;
    
    form {
        display: none;
        padding: 15px 10px;
    }
    form div {
        background-color: yellow;
        width: 150px;
        position: relative;
    }
    form div input {
        padding: 10px 5px;
        border: none;
        border-bottom: 1px solid #64748b;
        outline: none;
        width: 140px;
    }
    form div input:focus {
        background-color: #f1f5f9;
    }
    form div button {
        position: absolute;
        right: 0px;
        padding: 7px 5px;
        border: none;
        background-color: #000;
        color: #fff;
        border-radius: 5px;
        font-size: 18px;
    }

    /* Show datas Weather */
    .container-weather {
        margin-top: 0px;
        box-sizing: border-box;
    }
    marquee {
        padding: 25px 0;
    }
    .container-weather ul {
        display: flex;
        list-style: none;
        justify-content: space-around;
        align-items: center;
        color: #000;
    }
    .container-weather li {
        position: relative;
    }
    .container-weather li:last-child {
        width: 30%;
        padding: 0 5px;
        display: flex;
        justify-content: space-around;
    }
   
    .container-weather li:nth-child(1) img {
        width: 20px;
        position: absolute;
        top: -11px;
        right: 11px;
    }

    .container-weather li:nth-child(3) img {
        position: absolute;
        bottom: 7px;
        filter: drop-shadow(0 2px 3px #000);
    }
    .container-weather li:nth-child(1) i{
        margin: 0 5px;
    }
    .container-weather li:nth-child(1) span {
        font-size: 12px;
     }
    .container-weather li:last-child div { 
        padding: 5px ;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
     .container-weather li:last-child i {
        margin: 0 5px ;
     }
    

`;

export default WeatherStyled;