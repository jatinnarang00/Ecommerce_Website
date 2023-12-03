import styled from 'styled-components'
import { Button } from './Components/Button';
import { NavLink } from 'react-router-dom'; 

const ErrorPage = () => {
  return (
    <Wrapper>
       <div className='container'>
        <div>
          <h2>404</h2>
          <h3>Ussh! You Lost On The Page !!</h3>
          <p>
            The Page you are looking For is currently not available .
            Click on The Button Below to go to correct path of website .
          </p>
          <NavLink to="/"> <Button> Go To Home</Button></NavLink>
        </div>
       </div>      
    </Wrapper>
  )
}


const Wrapper=styled.section`
      
      .container {
    padding: 5rem 0;
    text-align: center;

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 3.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }

`;

export default ErrorPage
