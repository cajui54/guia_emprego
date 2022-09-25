import styled from "styled-components";

const MainStyled = styled.main`
    width: 98%;
    min-height: 500px;
    margin: 50px auto;
    
    .container-bonus {
        padding: 20px;
        transform: translateY(40px);
    }
    .container-titles {
        width: 90%;
        margin: 5px auto;
    }
    .container-titles img {
        width: 80%;
        display: block ;
        margin: 10px auto;
        border-radius: 50%;
        
    }
    .container-titles h1{
        text-align: center;
        margin: 15px 0;
        color: #B22222;
    }
    .container-titles p {
        color: #696969;
        font-size: 18px;
    }
    dl {
        margin: 30px auto;
        width: 80%;
        overflow: hidden;
    }
    dl dt {
        background-color: #B22222;
        color: #fff;
        font-weight: bold;
        padding: 10px 10px;
        font-size: 20px;
        box-shadow: 1px 1px 3px silver;
        border-radius: 5px;
        margin: 40px 0;
    }
    dl dd {
        font-size: 20px;
    }
    dl dd a {
        text-decoration: none;
        overflow: hidden;
    }
    @media screen and (min-width: 700px) {

        .container-titles {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 350px;
            margin-top: 50px;
            margin-bottom: 50px;
        }
        .container-titles img{
            width: 40%;
            height: 100%;
            margin: 0 20px;
        }
        .container-titles div {
            width: 70%;
            margin-top: 50px;
            text-align: center;
        }
        .container-titles div h1 {
            text-align: center;
            margin: 20px 0;
        }
    
        dl {
            width: 500px;
        }
    }
    @media screen and (min-width: 1000px) {
        .container-titles img { 
            width: 20%;
        }
    }
`

export default MainStyled;