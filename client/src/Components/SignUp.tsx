import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import { RiLockPasswordFill } from "react-icons/ri";
import ToggleButton from "./ToggleButton";
// import { FaEye } from "react-icons/fa";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Loginkaro from "./Loginkaro";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl">
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-purple-700">
          Create Your Account
        </h2>
        <p className="text-sm mb-4 text-purple-400">
          Sign up to explore the best homes.
        </p>
        <h3></h3>
        <form>
          {/* <div className="mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <IoIosMail />
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder="aman@gmail.com"
            />
          </div> */}
          <div className="relative">
            {/* Password input with padding-left for the lock icon */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Lock icon inside input */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosMail className="text-gray-400" />
            </div>
          </div>
          <div className="relative w-full max-w-md">
            {/* <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
        <FaLock />
        Password
      </label> */}

            <div className="relative mt-6 mb-6">
              {/* Password input with padding-left for the lock icon */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Lock icon inside input */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>

              {/* Eye toggle button */}
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
            </div>
            <div className="relative mt-6 mb-6">
              {/* Password input with padding-left for the lock icon */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Lock icon inside input */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>

              {/* Eye toggle button */}
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
            </div>
          </div>
        </form>

        <ToggleButton />
        <br></br>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-[30px] hover:bg-purple-700 transition mt-6 mb-6">
          Next
        </button>
        <div>
          {/* Your signup form here */}

          <p className="text-purple-500">
            Already have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => setShowLogin(true)}>
              Login
            </span>
          </p>

          {/* Login Popup Modal */}
          {showLogin && (
            <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
                <button
                  onClick={() => setShowLogin(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">
                  &times;
                </button>
                <Loginkaro onClose={() => setShowLogin(false)} />
              </div>
            </div>
          )}
        </div>
        {/* <button className="flex items-center bg-purple-700 font-bold text-white p-2 rounded-md w-full mt-2 text-center hover:bg-purple-600 transition">Login</button> */}
      </div>
    </div>
  );
};

export default Login;
