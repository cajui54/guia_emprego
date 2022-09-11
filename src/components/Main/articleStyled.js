import styled from "styled-components";

const Articles = styled.article`
    width: 90%;
    min-height: 500px;
    margin: 100px auto;
    section {
        margin: 50px 0;
    }
    h2 {
        margin: 20px 5px;
        color: #800000;
    }
    p {
        color: #696969;
        letter-spacing: 1.3px;
        line-height: 25px;
        margin: 20px 0;
    }
    @media screen and (min-width: 700px) {
        width: 50%;
    }

`
export default Articles;