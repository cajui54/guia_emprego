import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    .group-title {
        padding: 20px;
        margin-bottom: 20px;
    }
    .group-title h1,.group-title h2{
        font-weight: bold;
        
    }
    .group-title h1 span, .group-title  h2 span {
        color: #fef08a;
    }
    .group-title h2 {
        transform: translate(100px, 5px) scale(1.5);
    }

    .info-section {
        margin: 50px auto;
        font-size: 20px;
    }
    .info-section p {
        padding: 10px 20px;
        line-height: 30px;
    }
    .icons-plus {
        margin: 0 5px;
    }
    @media screen and (min-width: 768px) {
        .info-section {
            width: 80%;
            font-size: 25px;
            transform: translateY(-25px);
        }
        .group-title {
            margin-left: 150px;
        }
    }
    
`

export default GlobalStyle;