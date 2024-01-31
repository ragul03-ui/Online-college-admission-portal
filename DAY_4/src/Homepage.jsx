import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";
import Navbar from './Navbar';


// Create the Home component
const Home = () => {
  return (
    <div className="home-page">
      <Navbar></Navbar>
      <header>
        <h1>Welcome to the Online Admission Portal</h1>
        <p>Apply for your desired courses and programs!</p>
      </header>
      
      
      <section className="apply-now">
        <h2>Apply Now</h2>
        <p>Ready to take the next step? Apply for admission now!</p>
          <button>
        <Link to="/Admission">
            Start Application
        </Link>
            </button>
      </section>

      


      <footer>
        <p>&copy; 2024 Online Admission Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;