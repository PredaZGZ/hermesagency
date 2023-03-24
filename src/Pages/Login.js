import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ValidateToken from "../Helpers/validateToken";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Slices/AuthSlice";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.userToken);
  try {
    ValidateToken(token).then((res) => {
      if (res.status === 200) {
        navigate('/dashboard');
      }
    })
  } catch (error) { }


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
          sessionStorage.setItem("token", res.data.token)
          navigate("/dashboard");
        }
      })
      .catch(() => { setErrorMsg("Something went wrong") });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendLoginRequest();
  }
  return (
    <>
      <div className='gradient w-screen h-screen flex justify-center '>
        <div className="fondo2 self-center z-10">
          {errorMsg &&
            <h4 className="text-2xl font-bold text-center">{errorMsg}</h4>}
          <div className="flex justify-center altura-min">
            <img src="media/logologin.png" alt="Logo" className="logo-login" />
          </div>
          <h1 className="welcome flex justify-center text-white">Welcome Back</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div className="flex mx-10">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="you@youremail.com"
                  className="input-hermes px-8 py-6 w-full"
                />
              </div>
              <div className="flex mx-10 mt-5">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="input-hermes px-8 py-6 w-full"
                />
              </div>
              <div className="flex mx-10 justify-center my-6">
                <button className="next-button px-9 py-2 font-bold">
                  Login
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9166 24.5417C12.6148 24.5423 12.3223 24.4371 12.09 24.2446C11.9592 24.1361 11.851 24.003 11.7718 23.8527C11.6926 23.7024 11.6437 23.538 11.6281 23.3688C11.6125 23.1996 11.6305 23.029 11.6809 22.8668C11.7313 22.7045 11.8133 22.5539 11.922 22.4233L17.7087 15.5L12.1287 8.56375C12.0214 8.43162 11.9413 8.2796 11.8929 8.11641C11.8446 7.95322 11.829 7.78209 11.847 7.61284C11.865 7.4436 11.9163 7.27958 11.9979 7.13022C12.0795 6.98085 12.1898 6.84909 12.3225 6.74249C12.4561 6.62491 12.6126 6.53621 12.7822 6.48197C12.9517 6.42774 13.1306 6.40913 13.3077 6.42733C13.4848 6.44552 13.6562 6.50012 13.8112 6.5877C13.9661 6.67527 14.1013 6.79394 14.2083 6.93624L20.447 14.6862C20.637 14.9174 20.7409 15.2073 20.7409 15.5065C20.7409 15.8056 20.637 16.0955 20.447 16.3267L13.9887 24.0767C13.8591 24.233 13.6945 24.3565 13.5083 24.4373C13.322 24.5181 13.1193 24.5539 12.9166 24.5417Z" fill="#3F9ED3"/>
                  </svg>
                </button>
                <a href="/forgot-password" className="forgot-pwd mx-10 my-auto">
                  Forgot Password?
                </a>
              </div>           
            </div>
          </form>
        </div>
        
        <svg className='vector' width="1920" height="795" viewBox="0 0 1920 795" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-411 694.978L-291.667 662.213C-172.333 629.447 66.3333 563.915 305 463.894C543.667 363.872 782.333 232.809 1021 265.575C1259.67 298.341 1498.33 496.659 1737 481.139C1975.67 463.894 2214.33 232.809 2333.67 115.542L2453 0V795H2333.67C2214.33 795 1975.67 795 1737 795C1498.33 795 1259.67 795 1021 795C782.333 795 543.667 795 305 795C66.3333 795 -172.333 795 -291.667 795H-411V694.978Z" fill="white" />
        </svg>
      </div>
    </>
  )
}

export default Login;

