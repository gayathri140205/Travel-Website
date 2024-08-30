import Mountain1 from "../Assets/1.jpeg"
import Mountain2 from "../Assets/2.jpeg"
import Mountain3 from "../Assets/11.jpeg"
import Mountain4 from "../Assets/9.jpeg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination =() =>{
    return(
      <div className="destination">
      <h1>Popular Destination</h1>
      <p>Explore top travel spots, from vibrant cities to serene landscapes, perfect for your next adventure.</p> 
  <DestinationData 
  className="first-des"
    heading="Kyoto , Japan"
    text="Kyoto, Known for its stunning temples, traditional tea houses, and beautiful cherry blossoms, Kyoto offers a serene escape into Japan's rich cultural heritage. The city is a blend of ancient traditions and modern charm, making it a top destination for those seeking tranquility and historical depth."
    img1={Mountain1}
    img2={Mountain2}
  />
   <DestinationData
     className="first-des-reverse"
    heading="Santorini, Greece"
    text="Santorini, with its iconic whitewashed buildings and stunning views of the Aegean Sea, has become a top travel destination for its picturesque sunsets and crystal-clear waters. The island is also known for its rich history, with ancient ruins and archaeological sites that offer a glimpse into its past."
    img1={Mountain3}
    img2={Mountain4}
  />
     </div>
    )
}
export default Destination;