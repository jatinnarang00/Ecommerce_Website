import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import Nav from './Nav';


const MainHeader =styled.header`
    padding:0 4.8rem;
    height:8rem;
    background-color:${({theme})=>theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    background-image:url("./black-bg.jpg");
    background-size:cover;

    

    .logo{
        height:7.2rem;
    }
`;

const Header = () => {
  return (<>
    <MainHeader>
      <NavLink to="/">
        <img className='logo' src="./Logo_Clock_1.png" alt="Clock store logo" />    
      </NavLink>
      
      <Nav/>
      
    </MainHeader>
    <hr className='white-hr'/>
    </>
  );
};

export default Header;
