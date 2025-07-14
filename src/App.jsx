import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TeamPage from './component/Teampage';
import CustomizationForm from './component/CustomizationForm';
import AuthForm from './component/AuthForm';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/Authform" element={<AuthForm />} />
         <Route path="/TeamPage" element={<TeamPage />} />
         <Route path="/CustomizationForm" element= {<CustomizationForm/>} />

      </Routes>
    </Router>
         
    
  );
}


export default App;