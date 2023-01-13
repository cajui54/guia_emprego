import styled from "styled-components";

const ArticleStyled = styled.article`
    width: 100%;
    h1 {
        padding: 10px 50px;
    }
    section {
        margin: 50px auto;
    }
    section h2 {
        margin-left: 40px;
        font-size: 20px;
        font-weight: bold;
    }
    @media screen and (min-width: 800px) {
        width: 80%;
        margin: 10px auto;
    
       h1 {
        text-align: center;
        font-size: 24px;
       } 
    }
    @media screen and (min-width: 1000px) {
        width: 70%;
    }
`;

export default ArticleStyled;