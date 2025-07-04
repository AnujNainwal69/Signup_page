import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-row justify-center gap-x-24 h-screen overflow-hidden'>
      {/* Left side - Image */}
      <div className='max-w-100  min-w-80  flex items-center justify-center pt-6 pb-6 bg-white'>
        <img 
          src="/signinlogo.png" 
          alt="TaskFleet Logo" 
          className="max-w-full max-h-full  rounded-4xl  object-contain" 
        />
      </div>

      {/* Right side - Form */}
      <div className="max-w-100 min-w-80  flex justify-center items-center  bg-white p-8">
        <div className="w-full  min-w-full ">
          <h1 className="text-[#26203B] text-xl font-bold mb-6 ">TaskFleet</h1>
          
          <div className="flex mb-6 rounded-xl p-1 bg-gray-200">
            <button 
              type="button"
              onClick={handleSignUpClick}
              className="flex-1 py-1  text-xs text-gray-500 rounded-xl hover:bg-gray-100 transition"
            >
              Sign Up
            </button>
            <button className="flex-1 py-1  text-xs text-white bg-blue-500 rounded-xl">Sign In</button>
          </div>
          
          <form className="space-y-2">
            <div>
              <label className="block mb-1 font-medium text-xs">Email Id</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 border-[#a192dd]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-xs">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border border-[#a192dd] rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition text-xs"
            >
              Continue
            </button>

            <div className="my-4 text-center text-xs text-gray-500">OR</div>

            <div className="flex flex-row gap-4 justify-between ">
              <div className='p-2 flex-1 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer'>
                <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-6 h-6" />
              </div>
              <div className='p-2 flex-1 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer'>
                <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="Apple" className="w-6 h-6" />
              </div>
              <div className='p-2 flex-1 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer'>
                <img src="https://img.icons8.com/color/48/windows-logo.png" alt="Microsoft" className="w-6 h-6" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
