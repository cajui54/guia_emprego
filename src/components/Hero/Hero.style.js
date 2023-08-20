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
    .group-title {
        position: absolute;
        top: 150px;
        left: 50px;
    }
    .group-title h1 {
        font-size: 2em;
    }
    .group-title h2 {
        font-size: 2.5em;
        transform: translate(2px, -14px);
    }
    .group-title h1 span, .group-title h2 span{
        color: #fef08a;
    }
    @media screen and (max-width: 280px) {
        .group-title {
            left: 15px;
        }
        .group-title h1 {
        font-size: 1.5em;
    }
    .group-title h2 {
        font-size: 1.9em;
        transform: translate(2px, -10px);
    }
    }
    @media screen and (min-width: 820px) {
        position: relative;
        .slideshow {
            height: 350px;
        }
        .group-title {
        top: 250px;
        left: 50px;
    }

    }
    @media screen and (min-width: 900px) {
        .slideshow {
            position: relative;
            height: 500px;
        }
        & img {
            height: 500px;
        }
        .group-title {
            top: 350px;
            left: 70px;
        }
        .group-title h1 {
            font-size: 3em;
        }
        .group-title h2 {
            font-size: 2.9em;
            
        }
    }

    

`

export default HeroStyled;