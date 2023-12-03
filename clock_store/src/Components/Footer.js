import styled from "styled-components"
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import{AiOutlineInstagram,AiOutlineWhatsApp,AiOutlineYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
            <div>
                <h3>
                    Start Your Shopping !
                </h3>
                <h3>
                    Need Help ? Contact with us .
                </h3>
            </div>
            <div>
                <Button className="btn"><NavLink to="/contact"> Get Started</NavLink></Button>
            </div>
        </div>
      </section>

      {/* Main FOOTER */}

      <footer>
      <div className="container grid grid-four-column footer-section">
        <div className="footer-about">
            <h3>My Time Store</h3>
            <p> Lorem jwojw hqiowh hqwowqjowq hqihdqbdqu jwqowqjihw husHihs OJOJJJ</p>
        </div>
        <div className="footer-subscribe">
            <h3>Subscribe To Get Important Updates</h3>
            <form action="#">
                <input type="mail" placeholder="Your Email"></input>
                <input type="submit" value="subscribe"></input>
            </form>
        </div>
        <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="footer-social--icons">
          <div>
            <AiOutlineInstagram className="icons"/>
          </div>
          <div>
            <AiOutlineWhatsApp className="icons"/>
          </div>
          <div>
            <AiOutlineYoutube className="icons"/>
          </div>
        </div>
        </div>
        <div className="footer-contact">
          <h3> Call Us</h3>
           <a href="tel:8708998602"> <h3 className="contact-num"> +91879080652 </h3></a>
        </div>
        </div>


        {/* Bottom Footer */}

      <div className="footer-bottom--section">
        <hr/>
        <div className="container grid grid-two-column">
          <p>@{new Date().getFullYear()} My Time Store . All Rights Reserved</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  .footer-section{
    padding:0 7rem;
  }

  footer {
    padding: 14rem 0rem 9rem 0rem;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: white;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: white;
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;


export default Footer
