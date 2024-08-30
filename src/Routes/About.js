import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/night.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
    return (
      <>
      <Navbar />
      <Hero
        cName="hero-mid"
        
        heroImg={AboutImg}
        title="About"
        btnClass="hide" />
           <div style={{ paddingTop: "500px", paddingBottom: "20px", textAlign: "center" }}></div>
        <AboutUs/>
        <Footer/>
      </>
    )
  }
  
  export default About;