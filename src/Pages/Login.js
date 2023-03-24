import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ValidateToken from "../Helpers/validateToken";
import { useDispatch } from "react-redux";
import { setLogin } from "../Slices/AuthSlice";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmailform] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const token = sessionStorage.getItem('token');
  try {
    ValidateToken(token).then((res)=> {
      if (res.status === 200) {
        navigate('/dashboard');
      }})
  } catch (error) {}
  

  function sendLoginRequest() {
    setErrorMsg("");
    const reqBody = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/auth/login", reqBody)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setLogin(res.data));
          navigate("/dashboard");
        }
      })
      .catch(()=>{setErrorMsg("Something went wrong")});
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      sendLoginRequest();
    }
    return(
      <>
      <div className='gradient w-screen h-screen flex justify-center '>
        <div className="fondo2 self-center z-10">
          {errorMsg &&
            <h4 className="text-2xl font-bold text-center">{errorMsg}</h4>}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                  <label>
                    <input
                      onChange={(e) => setEmailform(e.target.value)}
                      value={email}
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block">
                  Password
                  <label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </label>
                </label>
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <a href="/" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
        <svg className='vector' width="1920" height="795" viewBox="0 0 1920 795" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-411 694.978L-291.667 662.213C-172.333 629.447 66.3333 563.915 305 463.894C543.667 363.872 782.333 232.809 1021 265.575C1259.67 298.341 1498.33 496.659 1737 481.139C1975.67 463.894 2214.33 232.809 2333.67 115.542L2453 0V795H2333.67C2214.33 795 1975.67 795 1737 795C1498.33 795 1259.67 795 1021 795C782.333 795 543.667 795 305 795C66.3333 795 -172.333 795 -291.667 795H-411V694.978Z" fill="white" />
        </svg>
      </div>
    </>
  )
}

export default Login;
