import styled from "styled-components";

const FooterStyled = styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #f1f5f9;
    box-shadow: rgba(0,0,0,.15) 0px -2px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-size: 15px;
        color: #334155;
        letter-spacing: 1.1px;
        transition: all .3s ease-in;
    }
    a:hover {
        color: #000;
        font-weight: bold;
    }
    a i {
        font-size: 20px;
        margin-right: 15px;
    }
`;

export default FooterStyled;