import React from 'react';
import SignupForm from './component/SignupForm'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninForm from './component/Signinform';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
         <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </Router>
  );
}


export default App;