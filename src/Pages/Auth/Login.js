import React, { useContext, useState } from "react";
import axios from "../../Pages/Token/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/Context";


const Login = () => {
  const navigate = useNavigate();

 
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [state,setState]= useContext(UserContext)
    

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response= await axios.post("api/auth/users/login",input, )
       
     
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setState({isUser:response.data.isUser})
        window.localStorage.setItem("auth",JSON.stringify(response.data.isUser))
       
        alert(response.data.message);
        
     
       
       // localStorage.setItem("name", response.data.name);
       // localStorage.setItem("email", response.data.email);
      
       
        navigate("/");
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
        <form onSubmit={handleLogin}>
            
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
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={input.password}
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
        
       
        <div className="mt-4 text-grey-600">
        Don't have an account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
        </div>
        <div className="mt-4 text-grey-600">
             Forgot Your Password ?
            <span>
              <Link to="/reset-password">Click here</Link>
            </span>
        </div>
       
        
    </div>
</div> 
     



  );
};

export default Login;