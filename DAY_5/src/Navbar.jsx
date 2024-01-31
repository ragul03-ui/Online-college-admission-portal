import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [selectCourseDropdown, setSelectCourseDropdown] = useState(false);

  const toggleCourseDropdown = () => {
    setCourseDropdown(!courseDropdown);
  };

  const toggleSelectCourseDropdown = () => {
    setSelectCourseDropdown(!selectCourseDropdown);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#" onClick={toggleCourseDropdown}>Course</a>
          <ul className={courseDropdown ? 'dropdown-visible' : ''}>
            <li>
              <a href="#" onClick={toggleSelectCourseDropdown}>Select</a>
              <ul className={selectCourseDropdown ? 'dropdown-visible' : ''}>
                <li><a href="#">Computer Science</a></li>
                <li><a href="#">Business Administration</a></li>
                <li><a href="#">Engineering</a></li>
              </ul>
            </li>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </li>
        {/* <li><a href="/AdminPage">Admin</a></li> */}
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
        
        <li><a href="/Login">Logout</a></li>


      </ul>
    </nav>
  );
};

export default Navbar;
