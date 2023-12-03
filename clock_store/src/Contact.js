import styled from "styled-components";

const Contact=()=>{
  const Wrapper =styled.section`
    
    padding: 9rem 0 5rem 0;
    text-align:center;

    .container{
      margin-top:6rem;
    }

    .contact-form{
      max-width:50rem;
      margin:auto;

      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;
        
        input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;

          &:hover{
            background-color: grey;
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
          }
        }
      }
    }
  `;

   return (<Wrapper>
    <h2 className="common-heading">Contact Page</h2>
     <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6861.747543002608!2d76.655331354
     59913!3d30.69382746238122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef38cf8337ad%3A
     0x418d847cf8a80f4!2sLandran%2C%20Punjab%20140307!5e0!3m2!1sen!2sin!4v1694611527776!5m2!1sen!2sin"
      width="85%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>"
    

    <div className="container">
       <div className="contact-form">
        <form action="https://formspree.io/f/xeqbzole" method="post" className="contact-inputs">
          <input type="text" placeholder="Name" name="username" required autoComplete="off"/>
          <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>
          <textarea placeholder="Write Your Message" name="Message " cols="30" rows="10" required autoComplete="off"/>
        <input type="submit" value="send"/>
        </form>
       </div>

    </div>


     </Wrapper>
     )

}

export default Contact;