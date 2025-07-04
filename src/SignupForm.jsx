import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const validatePassword = (pwd) => {
    return pwd.length < 8 || pwd === email || !/[0-9!@#$%^&*]/.test(pwd);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setShowPasswordRules(validatePassword(value));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">

      
      <div className="w-full max-w-md p-6 ">
        <h1 className="text-[#26203B] text-2xl ml-10 font-bold mb-10 ">TaskFleet</h1>
        <div className="flex mb-6 rounded-full bg-gray-200">
          <button className="flex-1 py-2 text-white bg-blue-500 rounded-full">Sign Up</button>
          <button className="flex-1 py-2 text-gray-500">Sign In</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email Id</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          {/* Password Validation Rules */}
          {showPasswordRules && (
            <ul className="text-xs text-gray-500 pl-4 list-disc">
              <li>Password Strength: Weak</li>
              <li>Cannot contain your name or email address</li>
              <li>At least 8 characters</li>
              <li>Contains a number or symbol</li>
            </ul>
          )}

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Company ID</label>
            <input
              type="text"
              placeholder="Enter Company ID"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Create Account
          </button>

          <div className="my-4 text-center text-sm text-gray-500">OR</div>

          <div className="flex justify-around space-x-4">
            <div className='pt-3 pb-3 flex items-center justify-center border-cyan-300 border-1 rounded-xl w-screen '> <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-8 h-8 cursor-pointer" /> </div>
            <div className='pt-3 pb-3 flex items-center justify-center border-cyan-300 border-1 rounded-xl w-screen'> <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="Apple" className="w-8 h-8 cursor-pointer" /> </div>
            <div className='pt-3 pb-3 flex items-center justify-center border-cyan-300 border-1 rounded-xl w-screen '> <img src="https://img.icons8.com/color/48/windows-logo.png" alt="Microsoft" className="w-8 h-8 cursor-pointer" /> </div>
          </div>

          <p className="text-xs text-center text-gray-600 mt-6">
            By signing up to create an account I accept Company’s<br/>
            <span className="text-black">Terms of use & Privacy Policy</span> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;



// import React, { useState } from 'react';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [companyId, setCompanyId] = useState('');
//   const [showPasswordRules, setShowPasswordRules] = useState(false);

//   const validatePassword = (pwd) => {
//     return pwd.length < 8 || pwd === email || !/[0-9!@#$%^&*]/.test(pwd);
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     setShowPasswordRules(validatePassword(value));
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side */}
//       <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-10 flex flex-col justify-center items-center rounded-bl-[2rem] rounded-tr-[2rem]">
//         <h1 className="text-4xl font-bold mb-4 text-center">WELCOME TO TASKFLEET</h1>
//         <p className="text-lg mb-8 text-center">Your Gateway to Effortless Management</p>
//         <div className="mt-8 text-center">
//           <h2 className="text-2xl font-semibold">Seamless Collaboration</h2>
//           <p className="text-sm mt-2">Effortlessly work together with your team in real-time.</p>
//         </div>
//         <div className="mt-6 flex space-x-2">
//           <span className="w-2 h-2 rounded-full bg-white/80"></span>
//           <span className="w-2 h-2 rounded-full bg-white"></span>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-8">
//         <div className="flex items-center mb-6">
//           <img src="/logo.png" alt="logo" className="w-5 h-5 mr-2" />
//           <h1 className="text-xl font-bold text-gray-900">TaskFleet</h1>
//         </div>

//         <div className="flex gap-2 mb-6">
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Sign Up</button>
//           <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-md">Sign In</button>
//         </div>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Email Id</label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             {showPasswordRules && (
//               <ul className="text-xs mt-2 text-gray-500 list-disc ml-5">
//                 <li>Password Strength : Weak</li>
//                 <li>Cannot contain your name or email address</li>
//                 <li>At least 8 characters</li>
//                 <li>Contains a number or symbol</li>
//               </ul>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Re-enter Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Mobile Number</label>
//             <input
//               type="tel"
//               placeholder="Enter Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Company ID</label>
//             <input
//               type="text"
//               placeholder="Enter Company ID"
//               value={companyId}
//               onChange={(e) => setCompanyId(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
//           >
//             Create Account
//           </button>

//           <div className="flex items-center my-4">
//             <hr className="flex-grow border-t border-gray-300" />
//             <span className="mx-2 text-gray-400 text-sm">OR</span>
//             <hr className="flex-grow border-t border-gray-300" />
//           </div>

//           <div className="flex justify-center gap-4">
//             <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-8 h-8 cursor-pointer" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-8 h-8 cursor-pointer" />
//             <img src="https://img.icons8.com/color/48/000000/windows-10.png" alt="Microsoft" className="w-8 h-8 cursor-pointer" />
//           </div>

//           <p className="text-xs text-center text-gray-400 mt-4">
//             By signing up to create an account I accept Company's <br />
//             <span className="underline cursor-pointer">Terms of use</span> & <span className="underline cursor-pointer">Privacy Policy</span>.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
