import styled from "styled-components";

const MainStyled = styled.main`
    width: 98%;
    min-height: 500px;
    margin: 50px auto;

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
            height: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .container-titles img{
            width: 30%;
            height: 100%;
        }
        .container-titles div {
            width: 30%;
            margin-right: 250px;
        }
        .container-titles div h1 {
            text-align: left;
        }
        dl {
            width: 500px;
        }
    }
`

export default MainStyled;