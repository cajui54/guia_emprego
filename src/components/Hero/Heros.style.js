import styled from "styled-components";

const Heros = styled.div`
    width: 100%;
    position: relative;
    & img {
        max-width: 100%;
        height: 100%;
    }
    .background {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(255,255, 255, 0.1), rgba(0, 0, 0, .9));
        position: absolute;
        top: 0;

    }
    @media screen and (min-width: 1000px){
        width: 100%;
        .container-hero {
            width: 100%;
            height: 350px;
        }
        & img {
            width: 100%;
        }
        
    
    }
 
`
export default Heros;