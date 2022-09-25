import styled from "styled-components";

const Weathers = styled.section`
position: relative;
    width: 100%;
    z-index: 1;
    .fa-location-dot {
        color: #8B0000;
    }
    .fa-temperature-half {
        color: #20B2AA;
    }
    .fa-droplet {
        color: #4682B4;
    }
    .fa-wind{
        color: #1E90FF;
    }
    .humidity {
        display: flex;
    }
    ul {
        display: flex;
        list-style: none;
        width: 100%;
        text-align: center;
    }
    ul li {
        margin-bottom: 10px;
        text-align: center;
    }
    ul span {
        color: #1C1C1C;
        font-weight: bold;
    }
    ul i {
        margin: 5px 8px;
        font-size: 20px;
        text-shadow: 0 6px 5px #DCDCDC;
    }
    .description {
        align-items: center;
        font-weight: bold;
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
    }
    .description img{
        margin-top: -16px;
        filter: drop-shadow(0 5px 5px black);
    }
    @media screen and (min-width: 700px){
        ul li {
            margin-left: 20px;
        }
        .description{
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .description img{
            margin-top: -10px;
        }
        .humidity span {
            margin: 0 10px;
        }
        .humidity span:nth-child(1) {
            border-right: 2px solid #C0C0C0	;
            padding: 0 10px;
        }
    }
`;

export default Weathers;