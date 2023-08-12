import styled from "styled-components";

const Wrapper = styled.section`
    width: 90%;
    padding: 10px;
    margin: 50px auto;

    .container-jobs {
        margin: 50px auto;
    }
    .card {
        margin-top: 50px;
        border: 1px solid #fef08a;
        padding: 20px;
        border-radius: 5px;
    }
    .card h3 {
        text-align: center;
        margin-top: -50px;
        margin-bottom: 20px;
        transform: scale(1.2);
        font-size: 20px;
        color: #fef08a;
    }
    .card p {
        line-height: 30px;
    }
    .card:nth-child(2) h3 {
        transform: scale(.9) translateY(20px);
    }
    & a {
        display: block;
        background-color: #374151;
        font-weight: bold;
        text-align: center;
        padding: 10px 0;
        width: 200px;
        margin-top: 10px;
        text-decoration: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: all .5s ease-in;
    }
    & a:hover {
        transform: scale(1.1);
        opacity: .8;
    }
    
    & span {
        margin-top: 20px;
        display: block;
        padding: 10px;
        font-weight: bold;
    }
    .icon {
        color: #06b6d4;
    }
    .btnMore {
        margin: 5px auto;
    }
    .container-icon {
        text-align: center;
        font-size: 150px;
        color: #fff;
    }
    .group-title h2:nth-child(2){
        transform: translate(150px, -19px) scale(1.9);
    }
    @media screen and (min-width: 768px) {
        
        .group-title {
            margin-top: 50px;
            margin-left: 80px;
        }
        .group-title h2:nth-child(2) {
            transform: translate(220px, -19px) scale(1.9);
        }

        .container-jobs {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            transform: translateY(-90px);
        }
        .card {
            width: 45%;
            height: 500px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }
        .card p {
            flex-grow: 1;
        }
    }
    @media screen and (min-width: 1000px) {
        .group-title {
            margin-left: 150px;
        }
        .card {
            width: 30%;
        }
    }
`

export default Wrapper;