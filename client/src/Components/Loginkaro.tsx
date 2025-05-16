import React,{useState} from "react";
import { IoIosMail } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
import ToggleButton from "./ToggleButton";
// import { FaEye } from "react-icons/fa";
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
interface LoginProps {
  onClose: () => void;
}

const Loginkaro: React.FC<LoginProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl">
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-purple-700">
          Login to Your Account
        </h2>
        <p className="text-sm mb-4 text-purple-400">
          Welcome back! Please enter your credentials to log in.
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

      <div className="relative mt-2 mb-2">
        {/* Password input with padding-left for the lock icon */}
        <input
          type={showPassword ? 'text' : 'password'}
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
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <FaEyeSlash className="text-gray-500" />
          ) : (
            <FaEye className="text-gray-500" />
          )}
        </div>
      </div>
    </div>
          
        </form>
        <p className="flex items-end underline text-red-500">Forget Password?</p>
        <ToggleButton/>
        <br>
        </br>
        <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-[30px] hover:bg-purple-700 transition mt-2">
            Login
          </button>
        {/* <button className="flex items-center bg-purple-700 font-bold text-white p-2 rounded-md w-full mt-2 text-center hover:bg-purple-600 transition">Login</button> */}
      </div>
    </div>
  );
};

export default Loginkaro;
