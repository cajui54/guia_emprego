import styled from "styled-components";

const JobsSection = styled.div`
    overflow: hidden;
    position: relative;
    
    .container-btn-back {
        position: fixed;
        bottom: 15px;
        left: 20px;
        background-color: #374151;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-decoration: none;
        color: #fef08a;
        font-weight: bold;
        box-shadow: 0 0 8px #fef08a;
        z-index: 3;
    }
    .group-title {
        transform: translateY(-40px);
    }
    .container-btn-back div {
        transform: scale(1.8);
    }
    .container-btn-back span{
        font-size: 10px;
    }
    .container-jobs-sites {
        margin: 20px 0;
    }
    .container-jobs-sites p {
        margin-top: -25px;
    }
    .container-jobs-sites p span{
        color: #fef08a;
        font-size: 20px;
    }
    .group-title p {
        font-weight: bold;
        transform: translate(25px, 5px);
        width: 80%;
        
    }
    & dl {
        overflow: hidden;
        margin: 50px auto;
        padding: 5px;
    }
    & dt {
        background-color: #374151;
        padding: 10px;
        width: 200px;
        margin: 20px 0;
        border-radius: 5px;
        border: .5px solid #cbd5e1;
    }
    & dt span {
        margin-left: 10px;
    }
    & dd {
       overflow: hidden;
       padding: 20px 0;
       border-bottom: .5px solid #cbd5e1;
       transition: all 1s ease-in;
    }
    & dd:hover {
        transform: scale(1.1);
    }
    & dd a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: all 1s ease-in;
        padding: 10px 0;
    }
    & dd a:hover { 
        color: #fef08a;
    }
    @media screen and (min-width: 1000px) {
        .subtitle {
            margin-left: 100px;
            transform: translateY(-35px);
        }
        .subtitle p{
            margin: 5px -140px;
        }
        & dl {
            width: 50%;
            margin: 50px;
        }
    }
  
`

export default JobsSection;