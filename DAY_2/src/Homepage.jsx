import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Admission Portal</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      <div className="content">
        <section className="featured-courses">
          <h2>Featured Courses</h2>
          <div className="course-list">
            {/* Featured courses content from previous code */}
          </div>
        </section>

        <section className="announcements">
          <h2>Announcements</h2>
          <div className="announcement-list">
            {/* Announcements content from previous code */}
          </div>
        </section>

        <section className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/schedule">Class Schedule</Link></li>
            <li><Link to="/fees">Tuition Fees</Link></li>
            {/* Add more quick links */}
          </ul>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-list">
            <div className="event">
              <h3>Orientation Day</h3>
              <p>Get ready for an exciting start to the new academic year.</p>
            </div>
            {/* Add more upcoming events */}
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Reach out to our support team.</p>
          <Link to="/contact" className="contact-button">Contact Support</Link>
        </section>

        <section className="cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Apply now for admission and unlock a world of opportunities.</p>
          <Link to="/admissions" className="cta-button">Apply Now</Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
