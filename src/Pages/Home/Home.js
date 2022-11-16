
import Featured from "../../AllParking/Featured/Featured";
import FeaturedProperties from "../../AllParking/FeaturedProperty/FeaturedProperties";
import PropertyList from "../../AllParking/PropertyList/PropertyList";
import Footer from "../../Footer/Footer";
import Header from "../../ParkingSlot/ParkingHeader/Header";
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Services from "../Services";
import "./home.css";

const Home = () => {
  return (
    <div>
   
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        
       
        

        
      </div>
      
        <About></About>
        
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Home;