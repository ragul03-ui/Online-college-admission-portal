import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import SignUpForm from './assets/SignupPage';
import HomePage from './Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
} 

export default App;
