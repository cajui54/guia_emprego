import styled from "styled-components";

const Heros = styled.div`
    width: 100%;
    position: relative;
    & img {
        max-width: 100%;
    }
    .background {
        width: 100%;
        height: 250px;
        background: linear-gradient(rgba(255,255, 255, 0.1), rgba(0, 0, 0, .9));
        position: absolute;
        top: 0;

    }
`
export default Heros;