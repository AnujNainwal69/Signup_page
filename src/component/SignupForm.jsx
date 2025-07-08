import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    return pwd.length < 8 || pwd === email || !/[0-9!@#$%^&*]/.test(pwd);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setShowPasswordRules(validatePassword(value));
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="flex min-h-[100vh] justify-evenly items-center  p-5  ">
      
      
        
        {/* Left Side - Image */}

         <div className="min-w-200 min-h-170 flex items-center justify-center  ">

       <div className="bg-[url(./imagelogo.jpg)] bg-cover bg-center min-w-135  min-h-170 max-h-fit rounded-4xl   flex flex-col justify-between">
      
      <div className="flex flex-col items-center justify-center h-full pt-18">
         <div className="text-white text-4xl font-bold">WELCOME TO TASKFLEET</div>
        <div className="text-white text-lg pt-3 ">Your Gateway to Effortless Management</div>
      </div>
        

        <div className="flex flex-col items-center justify-center h-full pb-10">
           <div className="text-white text-4xl ">Seamless Collaboration</div>
          <div className="text-white text-xl pt-6">Effortless work together with your</div>
           <div className="text-white text-xl pb-6">team in real time.</div>
           <div className="text-white text-3xl font-bold ">---</div>
        </div>
        </div>

        </div> 

        {/* <div className="min-w-1/2 min-h-170 flex items-center justify-center ">
          <img
            src="./signinlogo.png"
            alt="TaskFleet Logo"
            className=" w-150 min-h-160 max-h-[100vh]  rounded-4xl  object-cover "
          />
        </div> */}




        {/* Right Side - Form */}
        <div className="min-w-1/2 min-h-160 flex items-center justify-center px-40  ">
          <div className="min-w-60 min-h-160   ">
            <h1 className="text-[#26203B] text-2xl font-bold mb-6">TaskFleet</h1>

            {/* Tab Switcher */}
            <div className="flex mb-6 rounded-full p-1 bg-gray-200 min-w-10 min-h-10">
              <button className="flex-1 py-2 text-xs text-white bg-blue-500 rounded-full">
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleSignInClick}
                className="flex-1 py-2 text-xs text-gray-600 rounded-full hover:bg-gray-100 transition"
              >
                Sign In
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-2">
              <div>
                <label className="block mb-1 font-medium text-xs">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border border-[#a192dd] rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              {showPasswordRules && (
                <ul className="text-xs text-gray-500 pl-4 list-disc">
                  <li>Password Strength: Weak</li>
                  <li>Cannot contain your name or email address</li>
                  <li>At least 8 characters</li>
                  <li>Contains a number or symbol</li>
                </ul>
              )}

              <div>
                <label className="block mb-1 font-medium text-xs">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  className="w-full px-3 py-2 border border-[#a192dd] rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-xs">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full px-3 py-2 border border-[#a192dd] rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-xs">Company ID</label>
                <input
                  type="text"
                  placeholder="Enter Company ID"
                  className="w-full px-3 py-2 border border-[#a192dd] rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition text-xs mt-4"
              >
                Create Account
              </button>

              <div className="my-4 text-center text-xs text-gray-500">OR</div>

              {/* Social Buttons */}
              <div className="flex flex-row gap-3">
                <div className="flex-1 p-2 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer">
                  <img
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1 p-2 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer">
                  <img
                    src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                    alt="Apple"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1 p-2 flex items-center justify-center border border-[#a192dd] rounded-xl hover:bg-gray-50 cursor-pointer">
                  <img
                    src="https://img.icons8.com/color/48/windows-logo.png"
                    alt="Microsoft"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <p className="text-[10px] text-center text-gray-600 mt-4">
                By signing up to create an account I accept Company's<br />
                <span className="text-black">Terms of use & Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default SignupForm;
