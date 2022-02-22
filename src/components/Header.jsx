import React, {  useState } from 'react'
import styled from 'styled-components';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";


function Header() {
  const data = [
    "Trade-In",
    "Test Drive",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerswall",
    "Commercial Energy",
    "Utilities",
    
  ]

  const [burgerState, setBurgerState] = useState(false);

  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="#">
        <LogoImg src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-Transparent-Image.png" />
      </a>
      <Menu>
        {cars && cars.map((car,index) => {
            return <p key={index} ><a href="#"> {car} </a></p>
        })}
      
      </Menu>

      <RightMenu>
        <p><a href="#">Shop</a></p>
        <p><a href="#">Tesla Accaunt</a></p>
        <p><a href="#"
          onClick={() => { setBurgerState(true) }}
        >Menu
        </a>
        </p>
      </RightMenu>

      <BurgerNav show={burgerState}>
        <CustomClose
          onClick={() => setBurgerState(false)}
          className="fas fa-times fa-2x">
        </CustomClose>
        <ul>
          {data.map((data,index) => {
            return <li key={index}> <a href="#">{data}</a> </li>
          })}
        </ul>
        <IconDisplay>
          <img
            className='language_icon'
            src='https://icons-for-free.com/iconfiles/png/512/language-1324760528959493996.png'
            alt="language_icon"
          />
          <h4>English System</h4>
        </IconDisplay>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  top:0;
  left:0;
  right:0;
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  z-index:1;
  padding:0 20px;
`;


const Menu = styled.div`
  display:flex;
  align-items:center;
  position:releative;
  p{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    font-size:14px;
  }
  @media (max-width:768px){
    display:none;
  }
`;


const LogoImg = styled.img`
    object-fit: contain;
    width: 100px;
`;

const RightMenu = styled.div`
  display:flex;
  align-items:center;

  p{
    font-weight:600;
    font-size:14px;
    text-transform:uppercase;
    margin-right:10px;
  }
`;


const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  text-align:start;
  background:#fff;
  width:300px;
  z-index:10000!important;
  padding:20px;
  transition:0.4s ease-in;
  transform:${props => props.show ? `translateX(0)` : `translateX(100%)`};
  ul{
    margin-top:20px; 
    list-style:none;
    li{
      padding:10px 0;
      position:relative;
      width:100%;
      cursor:pointer;
      border-bottom:1px solid rgb(81,83,87);
      a{
        font-weight:800;
      }
    }
    li:hover{
      border-bottom:transparent;
    }
    li:hover::before{
      left:0;
      width:100%;
      transition:.4s ease-in;
      opacity:1;
    }
    li::before{
      content:"";
      position:absolute;
      bottom:0;
      width:50%;
      opacity:0;
      left:30%;
      height:3px;
      background-color:rgb(81,83,87);
      border-radius:5px;
    }
  }
`;


const IconDisplay = styled.div`
  margin:20px 0;
  display:flex;
  align-items:center;

  .language_icon{
    width:30px;
  }
`;

const CustomClose = styled.i`
  position:absolute;
  right:2rem;
  cursor:pointer;
`;
