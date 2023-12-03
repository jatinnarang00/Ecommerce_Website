// import React from 'react'
import styled from 'styled-components';
// import { BrowserRouter , Routes , Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const HeroSection = ({myData}) => {

  const {headingForPage}=myData;
  
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {headingForPage} </h1>
            <p>
            Welcome To My Time Store . Here You Will get the Best Customised Clocks ,
              as per your style , your Home Theme . 

            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="./clock_black.png"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};



const Wrapper = styled.section`
  ${'' /* background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */}
  background-image:url("./black-bg.jpg");
  background-size:cover;
  height:90vh;
  padding: 12rem 0;

  .container{
    margin-top:-2rem;
  }

  img {
    min-width: 10rem;
    height: 10rem;
    margin-top:-5rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      color:white;
    }

    h1 {
      text-transform: capitalize;
      font-weight: 800;
      font-size:8rem;
      ${'' /* color:#b6651e; */}
      color:rgba(225,207,151,255)
    }

    .intro-data {
      margin-bottom: 0;
      ${'' /* color:#e3d08d; */}
      color:white;
      font-size:4rem;
      font-weight:700;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
