
import Featured from "../../AllParking/Featured/Featured";
import FeaturedProperties from "../../AllParking/FeaturedProperty/FeaturedProperties";
import PropertyList from "../../AllParking/PropertyList/PropertyList";
import Header from "../../ParkingSlot/ParkingHeader/Header";
import "./home.css";

const Home = () => {
  return (
    <div>
   
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        
      </div>
    </div>
  );
};

export default Home;