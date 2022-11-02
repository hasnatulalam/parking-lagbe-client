import React, { useState } from "react";
import axios from "../../Pages/Token/axiosInterceptor";
const ForgetPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("/api/auth/forget-password", { email });

        if (res.status === 200) {
          alert("Pls Check Your Email A Reset Password Link send for your email Address");
        }
        
   
    } catch (error) {
        alert(error.response.data.message);
      }
    

   
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
    <div>
        <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
                Logo
            </h3>
        </a>
    </div>
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={handleSubmit}>
            
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
                        id=""
                        name="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            
            
            <div className="flex items-center mt-4">
                <button  type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Send Email
                </button>
            </div>
            
        </form>
      
       
        
    </div>
</div>
  );
};

export default ForgetPassword;
