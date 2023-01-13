import styled from "styled-components";

const HomeStyled = styled.section`
    width: 100%;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;

   .container-title {
    
    justify-content: center;
   }
   .container-title h2 {
    transform: scale(1.3), translateX(15px);
   }
   .container-title h2:nth-child(2) {
    transform: translateY(-38px);
   }
    
    .container-jobs-links h2 {
        margin: 30px 0 20px 50px;
        font-size: 30px;
    }

    dl  {
        box-sizing: border-box;
        padding: 10px 30px;
    }
    dl dt {
        background-color: #0f172a;
        padding: 15px 20px;
        margin: 10px 0;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1.2px;
    }
    dl dd {
        margin-bottom: 40px;
        padding: 15px 10px;
        overflow: hidden;
    }
    dl dd a {
        color: #64748b;
        font-size: 20px;
        letter-spacing: 1.2px;
    }
    dl dd a:hover {
        color: #000;
        font-weight: bold;
    }

    @media screen and (min-width: 800px) {
        .info-section {
            width: 80%;
            margin: 0 auto ;
        }

        .container-title {
            width: 80%;
            margin: 0px auto;
        }
        dl {
            width: 80%;
            margin: 0 auto;
        }
      
    }
    @media screen and (min-width: 1000px) {
        .info-section {
            width: 70%;
            margin: 0 auto ;
            
        }
        .container-title {
            width: 40%;
        }
        dl {
            width: 40%;

        }
    }

`
export default HomeStyled; 