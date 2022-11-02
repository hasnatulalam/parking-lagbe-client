import React, {  useState } from 'react';
import axios from "../Pages/Token/axiosInterceptor";


const InputClass =
  'w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md';

const Contact=() =>{
/*   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(''); */

  const [input, setInput] = useState({
     fullName: "",
     email: "",
     phone:"",
     message:"",

  });

  const  SendMessage = async (e) => {
    e.preventDefault();
   
    try {
      
      let res = await axios.post(`api/auth/contact`, input);
      if (res) {
        res.message("Message Send Successfully")
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  
    

  return (
    <>
     
     div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={SendMessage}>
            
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Email 
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Password
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="message"
                        name="message"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={input.message}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                    />
                </div>
            </div>
            
          
            <div className="flex items-center mt-4">
                <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
         
       
    </>
  );
}

export default Contact;