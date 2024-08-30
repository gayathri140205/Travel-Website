import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Explore the world, enrich your soul."
      text="Choose Your Destination"
      button="Travel Plan"
      url="/"
      btnClass="show"/>
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;