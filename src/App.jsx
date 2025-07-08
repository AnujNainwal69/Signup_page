import React from 'react';
import SignupForm from './component/SignupForm'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninForm from './component/Signinform';
import TeamPage from './component/Teampage';
import CustomizationForm from './component/CustomizationForm';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
         <Route path="/signin" element={<SigninForm />} />
         <Route path="/TeamPage" element={<TeamPage />} />
         <Route path="/CustomizationForm" element= {<CustomizationForm/>} />

      </Routes>
    </Router>
   
    
  );
}


export default App;