import styled from "styled-components"

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>
            Trusted By 100+ Customers 
        </h3>
        <div className="brand-section-slider">
        {/* SLIDE 1 */}
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=
            M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
             alt="Customer Imge 1"/>
          </div>
        {/* SLIDE 2 */}
          <div className="slide">
              <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3
              wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Customer Imge 2"/>
          </div>

        {/* SLIDE 3 */}

          <div className="slide">
             <img src="https://images.unsplash.com/photo-1551263640-1c007852f616?ixlib=rb-4.0.3&ixid=M3wxM
             jA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
             alt="Customer Imge 3"/>
          </div>

         {/*Slide 4 */}
         <div className="slide">
            <img src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?ixlib=rb-4.0.3&ixid=M3wx
            MjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Customer Imge 4"/>
         </div>

         {/* Slide */}

         <div className="slide">
            <img src="https://images.unsplash.com/photo-1620327445287-1bb761ae1e5e?ixlib=rb-4.0.3&ixid=M3wx
            MjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Customer Imge 5"/>
         </div>


        </div>
      </div>

    </Wrapper>
      
    
  )
}

const Wrapper=styled.section`
   
   padding:9rem 0;
   background: ${({ theme }) => theme.colors.bg};

   .brand-section{
    padding:10rem 0 0 0;
   }
   
   h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 4rem;
    font-weight: 700;
  }

  img {
    min-width: 11rem;
    height: 11rem;
  }
  .brand-section-slider {
    margin-top: 5.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }

`;

export default Trusted
