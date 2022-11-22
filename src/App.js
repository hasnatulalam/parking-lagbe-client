


import { Routes, Route, Link } from "react-router-dom";

import Navbar from './Shared/Navbar'
import Register from './Pages/Auth/Register.js';

import ForgetPassword from './Pages/Auth/ForgotPassword';
import ChangePassword from './Pages/Auth/ChangePassword';

import Contact from './Pages/Contact';

import Header from './ParkingSlot/ParkingHeader/Header';
import Parking from './AllParking/Parking/Parking';
import Home from './Pages/Home/Home';
import List from "../src/ParkingSlot/ParkingList/List"
import NewHotel from "./AllParking/newParking/NewParking";
import NewRoom from "./AllParking/NewRoom/NewRoom";
import Pay from "./AllParking/Pay/Pay";
import Login from "../src/Pages/Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import AllUsers from "../src/AllParking/AllUsers/AllUsers"
import Map from "../src/Map/Map"

import { AdUnits } from "@mui/icons-material";
import AllParkingSpace from "./AllParking/AllParkingSpace/AllParkingSpace";

import AllParkingSlot from "./AllParking/AllParkingSlot/AllParkingSlot";
import About from "./Pages/About";
import Services from "./Pages/Services";
import CustomerReview from "./CustomerReview/CustomerReview";
import MakeAdmin from "./AllParking/MakeAdmin/MakeAdmin";











function App() {
  return (
    <div>

<Navbar></Navbar>
<Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/addParking" element={<NewHotel/>}/>
      

  
      

      <Route path="/Parking" element={<List/>}/>
        <Route path="/Parking/:id" element={<Parking/>}/>
        <Route path="/pay" element={<Pay/>}/>
       {/*  <Route path="/map" element={<Map/>}/> */}
            <Route path="/review" element={<CustomerReview/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/newParkingSpace" element={<NewRoom/>}/>
        <Route path="/user" element={<AllUsers/>}/>
        <Route path="/review" element={<CustomerReview/>}/>
        <Route path="/AllParking" element={<AllParkingSpace/>}/>
        <Route path="/AllParkingSlot" element={<AllParkingSlot/>}/>
        <Route path="/makeAdmin" element={<MakeAdmin/>}/>
      <Route path="/reset-password" element={<ForgetPassword/>}/>
      <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
    
    
     
</Routes>
         
   
  
                
             
      
     
     

      
     
       
     
     

        
       
        
       
       

        
        
        
    </div>
  );
}

export default App;
