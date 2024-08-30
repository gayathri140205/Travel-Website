import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../Assets/5.jpg";
import Trip2 from "../Assets/6.jpg";
import Trip3 from "../Assets/8.png";

 function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trip</h1>
        <p>Explore the latest travel adventures and highlights from recent trips</p>
        <div className="tripcard">
        <TripData
  image={Trip1}
  heading="Trip to London"
  text="London, the capital city of England, is a vibrant metropolis known for its rich history, cultural diversity, and iconic landmarks such as the Tower of London, Buckingham Palace, and the London Eye. Visitors can explore world-class museums, enjoy the bustling theater scene, and take in the beautiful parks and gardens."
/>

<TripData
  image={Trip2}
  heading="Trip to France"
  text="France, a country famed for its art, cuisine, and sophisticated culture, offers a diverse range of experiences. From the romantic streets of Paris with landmarks like the Eiffel Tower and Louvre Museum to the scenic vineyards of Bordeaux and the sun-soaked beaches of the French Riviera, France is a traveler's paradise. "
/>

<TripData
  image={Trip3}
  heading="Trip to South Korea"
  text="South Korea,  a dynamic country where ancient traditions meet modern innovation. Visitors can explore bustling cities like Seoul, which boasts impressive skyscrapers, palaces, and shopping districts. Beyond the urban areas, South Korea offers beautiful natural landscapes including mountains, forests, and coastal areas."
/>
</div>
    </div>
  )
}

export default Trip;