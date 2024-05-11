import React, { useState } from "react";
import LoginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="login">
      <div className="container mx-auto p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img className="" src={LoginIcon} alt="login icon" />
          </div>
          <form>
            <div className="grid">ّ
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter Email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>password :</label>
              <div className="bg-slate-100 p-2 flex justify-between items-center">
                <input
                  type={showPassword ? "text" :"password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-lg">
                  <span>
                    {setShowPassword? <FaEye /> : <FaEyeSlash /> }
                  </span>
                </div>
              </div>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
