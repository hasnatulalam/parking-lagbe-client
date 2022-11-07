


import { Routes, Route, Link } from "react-router-dom";

import Navbar from './Shared/Navbar'
import Register from './Pages/Auth/Register.js';
import Login from './Pages/Auth/Login.js';
import ForgetPassword from './Pages/Auth/ForgotPassword';
import ChangePassword from './Pages/Auth/ChangePassword';

import Contact from './Pages/Contact';

import Header from './ParkingSlot/ParkingHeader/Header';
import Parking from './AllParking/Parking/Parking';
import Home from './Pages/Home/Home';
import List from "../src/ParkingSlot/ParkingList/List"










function App() {
  return (
    <div>

<Navbar></Navbar>
<Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
  
      

      <Route path="/Parking" element={<List/>}/>
        <Route path="/Parking/:id" element={<Parking/>}/>
     
      <Route path="/reset-password" element={<ForgetPassword/>}/>
      <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
    
    
     
</Routes>
         
   
  
                
             
      
     
     

      
     
       
     
     

        
       
        
       
       

        
        
        
    </div>
  );
}

export default App;
