import styled from "styled-components";

const HeroStyled = styled.section`
    .slideshow {
        position: relative;
        height: 250px;
    }
    & img {
        width: 100%;
        height: 100%;
    }
    .bgGradient {
        background-image: linear-gradient(to top, black, transparent);    
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
    }
    .container-titles {
        padding: 20px;
        margin-top: 150px;
    }
    .container-titles h2 {
        transform: translate(150px, 5px) scale(1.8);
    }
    @media screen and (min-width: 820px) {
        position: relative;
        .slideshow {
            height: 350px;
        }
        .container-titles {
            width: 530px;
            margin-left: 100px;
            margin-top: 250px;
        }
        .container-titles h1 {
            transform: translateX(-35px);
        }
    }
    @media screen and (min-width: 1000px) {
        .slideshow {
        position: relative;
        height: 500px;
    }
        & img {
            height: 500px;
        }
    }
    

`

export default HeroStyled;