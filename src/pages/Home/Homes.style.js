import styled from "styled-components";

const HomeStyle = styled.main`
    overflow: hidden;
    & dl {
     width: 90%;
     margin: 10px auto;
    }
    & dt  {
        color: #ffff;
        margin: 20px 0;
        background-color: #374151;
        padding: 15px;
        border-radius: 5px;
        font-weight: bold;
        letter-spacing: 1.5px;
    }

    & dd {
        overflow: hidden;
        margin-bottom: 50px;
    }

    & dd a { 
        letter-spacing: 1.3px;
        color: #fef08a;
        font-weight: bold;
    }

    & dd a:hover {
        color: #fff;
    }

    .btnLink {
        color: #fff;
        text-decoration: none;
        background-color: #374151;
        margin: 10px auto;
        width: 250px;
        text-align: center;
        display: block;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        
    }
    .icon-site {
        color: #fff;
        margin-right: 20px;
        transform: scale(1.5);
    }
    .btnLink span {
        margin-right: 10px;
    }
    @media screen and (min-width: 768px) {
        & dl { 
            width: 65%;
        }
        
    }
    @media screen and (min-width: 1000px) {
        .container-jobs-links {
            margin-top: -100px;
            width: 70%;
        }
    }
`
export default HomeStyle;