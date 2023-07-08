import styled from "styled-components";

const BtnBugerMenuStyled = styled.div`
    .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        margin-right: 10px;
        transition:  all .5s ease-in-out;
        z-index: 5;
    }
    .menu-btn__buger {
        width: 40px;
        height: 6px;
        background-color: #fff;
        box-shadow: 0 2px 5px #a1a1aa;
        border-radius: 5px;
        transition:  all .5s ease-in-out;
    }
    .menu-btn__buger::before,
    .menu-btn__buger::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 6px;
        background-color: #ffff;
        box-shadow: 0 2px 5px #a1a1aa;
        border-radius: 5px;
        transition:  all .5s ease-in-out;
    }
    .menu-btn__buger::before {
        transform: translateY(-12px);
    }
    .menu-btn__buger::after {
        transform: translateY(12px);
    }

        /*ANIMATION*/
.menu-btn.open .menu-btn__buger{
  transform: translateX(-50px);
  background-color: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__buger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__buger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}

`
export default BtnBugerMenuStyled;