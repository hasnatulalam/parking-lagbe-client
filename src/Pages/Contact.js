import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../Pages/Token/axiosInterceptor";



const Contact=() =>{
 
  const [mail,setMail] =useState('')
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone:"",
    message:"",

 });

 const {fullName,email,phone,message} =user
 const onInputChange = e =>{
  setUser({...user,  [e.target.name]: e.target.value,})
 }

  const  SendMessage = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("api/auth/contact", user);
      if (res) {
        setMail(res.data);
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  
    

  return (
     

         <div className="py-10">
         <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
           <h2 className="text-center text-green-700 text-3xl mb-4">Contact Us</h2>
           <div
             
             className="flex flex-col items-center space-y-2"
           >
             <div className="border-2 w-60 border-green-700 flex rounded-3xl">
               <input
                 required
                
                 className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                 type="fullName"
                 name="fullName"
                 id="fullName"
                 placeholder="Your Name"
                 value={fullName}
                 onChange={onInputChange}
               />
             </div>
              <div className="border-2 w-60 border-green-700 flex rounded-3xl">
               <input
                 required
                 
                 className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                 type="email"
                 name="email"
                 id="email"
                 placeholder="Your Email"
                 value={email}
                 onChange={onInputChange}
               />
             </div>
             <div className="border-2 w-60 border-green-700 flex rounded-3xl">
               <input
                 required
                 
                 className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                 type="phone"
                 name="phone"
                 id="phone"
                 placeholder="Your Phone Number"
                 value={phone}
                 onChange={onInputChange}
                   
               />
             </div> 
             <div className="border-2 w-60 border-green-700 flex rounded-3xl">
              
              <textarea
              
                 required
                 
                 
                 className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                 type="message"
                 name="message"
                 id="message"
                 placeholder="Your Message"
                 value={message}
                 onChange={onInputChange}
               />
            
              
             </div>
           
          
   
             <div className="flex items-center justify-center mt-5">
               <button onClick={SendMessage}  className="mt-2 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
                 Contact Us
                 
               </button>
             </div>
           </div>
           </div>
           </div>
    
  );
}

export default Contact;