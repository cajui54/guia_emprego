import styled from "styled-components";

const Footers = styled.footer`
    width: 100%;
    min-height: 100px;
    background-color: #800000;
    padding-top: 20px;
    border-radius: 10px;
    h2 {
        color: #fff;
        text-align: center;
    }
    ul {
        width: 80%;
        margin: 20px auto;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    ul span {
        font-size: 18px;
    }
    ul i {
        margin: 10px;
    }
    ul li {
        width: 100%;
        text-align: center;
    }
    ul a {
        color: #fff;
        font-size: 25px;
        text-decoration: none;
    }
`
export default Footers;