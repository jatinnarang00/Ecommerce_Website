
import HeroSection from './Components/HeroSection'
import { useProductContext } from './Context/productcontext'

const About = () => {
  
  const {myName}=useProductContext();

  const data={
    headingForPage:"About-Us"
  };

  return (
    <> {myName}

    {" J  j "}
    <HeroSection myData={data}></HeroSection>
    </>
  )
}

export default About
