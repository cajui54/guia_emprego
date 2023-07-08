import styled from "styled-components";

const Foot = styled.footer`
    height: 100px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    & a {
        color: #ffff;
        font-weight: bold;
        text-decoration: none;
    }
    & a:hover {
        color: #fef08a;
    }
    & i {
        margin: 0 10px;
    }
`

export default Foot;