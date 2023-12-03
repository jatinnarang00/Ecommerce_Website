import React from 'react'
import {FaStarHalf,FaStar} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import styled from "styled-components";

const Star = ({stars,reviews}) => {
    const ratingStar = Array.from({length:5},(elem,index)=>{
      let number= index+ 0.5;
      debugger
      
      return(
        <span key={index}>
        {
          stars>=index+1
          ?<FaStar className='icon'/>
          :stars>=number
          ?<FaStarHalf className='icon'/>
          :<AiOutlineStar className='empty-icon'/>
        } </span>
      )

    });

  return (
    <Wrapper>
      <div className='icon-style'>
        {ratingStar}
        <p className='moving-border'>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

     .icon {
      font-size: 2rem;
      color: blue;
    }

    .empty-icon {
      font-size: 2rem;
    }


    @keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

.moving-border {
	position: relative;
	z-index: 0;
	width: 35rem;
	height: 5rem;
	border-radius: 1.5rem;
	overflow: hidden;
	padding: 1.1rem 0rem 0rem 2rem;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(blue,white), linear-gradient(white,blue), linear-gradient(blue,white), linear-gradient(white,blue);
		animation: rotate 10s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: black;
		border-radius: 5px;
		animation: opacityChange 3s infinite alternate;
	}
}

@keyframes opacityChange {
	50% {
		opacity:1;
	}
	100% {
		opacity: 1;
	}
}

p {
      font-size:2rem;
    } 


  }
`;

export default Star
