import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import SignUpForm from './assets/SignupPage';
import HomePage from './Homepage';
import AdmissionForm from './Admission';
import AdminPage from './AdminPage';
import Cover from './Cover';
import Ad from './Ad';



function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Cover/>} /> */}

      <Route path="/" element={<LoginPage/>} />

        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Admission" element={< AdmissionForm/>} />
        <Route path="/AdminPage" element={< AdminPage/>} />
        <Route path="/Ad" element={< Ad/>} />

        
        
      </Routes>
    </Router>
  );
} 

export default App;
