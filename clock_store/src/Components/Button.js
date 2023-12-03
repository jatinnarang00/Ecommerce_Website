import styled from "styled-components";

export const Button =styled.button`

   text-decoration:none;
   max-width:auto;
   background-image: radial-gradient(circle at 120.71% 50%, #ffd486 0, #f8d885 3.57%, #ecdc85 7.14%, #e0e088 10.71%, #d4e38c 14.29%, #c7e691 17.86%, #b9e999 21.43%, #abeba1 25%, #9dedab 28.57%, #8eefb6 32.14%, #7ef0c2 35.71%, #6ef1ce 39.29%, #5ef2da 42.86%, #4df2e6 46.43%, #3cf2f2 50%, #2df1fe 53.57%, #25f1ff 57.14%, #29efff 60.71%, #38eeff 64.29%, #4cebff 67.86%, #60e9ff 71.43%, #75e6ff 75%, #8ae3ff 78.57%, #9fdfff 82.14%, #b2dbff 85.71%, #c5d7ff 89.29%, #d6d2ff 92.86%, #e7ceff 96.43%, #f6caff 100%);color:rgb(250 250 250);
   padding:1.4rem 2.4rem;
   font-weight:600;
   border-radius:2rem;
   border:none;
   text-transform:uppercase;
   text-align:center;
   cursor:pointer;
   transition: all 0.3s ease;
   -webkit-transition:all 0.3s ease 0s;
   -moz-transition: all 0.3s ease 0s ;
   -o-transition: all 0.3s ease 0s;

   &:hover,%:active{
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme})=>theme.colors.shadowSupport};
    transform: scale(0.96);

   }

   a{
    text-decoration:none;
    color:rgb(255 255 255);
    font-size:1.95rem;
    font-weight:500;
   }

`