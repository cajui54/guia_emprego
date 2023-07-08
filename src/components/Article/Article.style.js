import styled from "styled-components";

const Article = styled.article`
    margin: 50px auto;
    padding: 20px;
    width: 85%;
    
    h1 {
        color: #fff;
    }
    & section {
        margin-top: 50px;
        
    }
    & h2 {
        color: #fef08a;
        margin: 10px 0;
    }
    & p {
        line-height: 25px;
    }
    & a {
        color: #fef08a;
    }
    @media screen and (min-width: 768px) {
        width: 80%;
    }
    & p {
        font-size: 20px;
        letter-spacing: 1.1px;
        line-height: 30px;
    }

`
export default Article;