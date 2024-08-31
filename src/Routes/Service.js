import React from 'react';
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/service.png";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import ServiceImg from "../Assets/ser.jpg";
import "../Components/Service.css";


function Service() {

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                btnClass="hide"
            />
             <div style={{ paddingTop: "300px", paddingBottom: "20px", textAlign: "center" }}></div>
            <div className={`service-container ${isMobile ? 'mobile' : 'desktop'}`}>
                <h1 className="service-title">Transforming Your Travel Dreams into Reality</h1>

                <div className={`service-card ${isMobile ? 'mobile' : 'desktop'}`}>
                    <img 
                        src={ServiceImg}
                        alt="Service"
                        className="service-img"
                    />
                    <p className="service-description">
                        At our travel agency, we pride ourselves on delivering exceptional services tailored to meet the unique needs of every traveler. From personalized itineraries that highlight both popular and hidden destinations to seamless booking experiences, we ensure every aspect of your trip is meticulously planned. Our dedicated team of travel experts is available around the clock to assist with any inquiries or adjustments, providing peace of mind at every step. We also offer specialized services such as guided tours, luxury accommodations, and exclusive access to events, making your journey unforgettable.
                        <br /><br />
                        We also collaborate with local communities to offer authentic experiences that go beyond the typical tourist attractions, ensuring that your travels leave a positive impact. Our commitment to excellence extends to every detail, ensuring that your journey is as comfortable and rewarding as possible. By continually refining our offerings based on client feedback, we strive to exceed your expectations on every trip. We are passionate about making your travel dreams a reality, and we’re with you every step of the way, from planning to your safe return home. Our services are built on a foundation of trust, reliability, and a genuine love for exploring the world. Let us handle the details so you can focus on creating memories that will last a lifetime.
                    </p>
                </div>
            
                <Trip />
            </div>
            <Footer />
        </>
    );
}

export default Service;
