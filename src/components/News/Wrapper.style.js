import styled from "styled-components";

const Wrapper = styled.section`
    .titles {
        margin-top: 85px;
    }
    .container-jobs {
        width: 95%;
        margin: 10px auto;
    }
    .card {
        width: 90%;
        margin: 30px auto;
        height: 400px;
        border-radius: 5px;
        border: 3px solid #374151;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .container-icon {
        padding: 20px 0;
        font-size: 100px;
        text-align: center;
        color: #fef08a;
    }
    .card h3 {
        color: #fef08a;
        text-align: center;
        transform: translateY(-40px) scale(1.2);
    }
    .card p {
        width: 90%;
        text-align: center;
        margin: 5px auto;
        transform: translateY(-40px);
    }
    .card a {
        background-color: #374151;
        width: 150px;
        padding: 5px;
        margin: 10px auto;
        text-decoration: none;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 50px;
    }
    @media screen and (min-width: 540px){ 
        .card { 
            width: 60%;
        }
    }

    @media screen and (min-width: 768px){
        .container-jobs {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .card { 
            width: 90%;
        }
    }
    @media screen and (min-width: 1000px){
        .container-jobs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        
        .card { 
            width: 90%;
        }
    }
`

export default Wrapper;