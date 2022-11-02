import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Shared/Navbar'
import Register from './Pages/Auth/Register.js';
import Login from './Pages/Auth/Login.js';
import ForgetPassword from './Pages/Auth/ForgotPassword';
import ChangePassword from './Pages/Auth/ChangePassword';
import Logout from './Pages/Auth/Logout';
import Contact from './Pages/Contact';
import AddParking from './ParkingSlot/AddParking';










function App() {
  return (
    <div>

<Navbar></Navbar>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/addparking" element={<AddParking/>}/>
      
     
      <Route path="/reset-password" element={<ForgetPassword/>}/>
      <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
    
    
     
</Routes>
         
   
  
                
             
      
     
     

      
     
       
     
     

        
       
        
       
       

        
        
        
    </div>
  );
}

export default App;
