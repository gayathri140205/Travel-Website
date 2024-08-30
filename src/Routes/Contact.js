import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/12.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";


function Contact() {
    return (
     <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide" />
           <div style={{ paddingTop: "500px", paddingBottom: "20px", textAlign: "center" }}></div>
        <ContactForm/>
           <Footer/>
     </>
    )
  }
  
  export default Contact;