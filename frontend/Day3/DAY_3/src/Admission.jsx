// StudentAdmissionForm.js
import React, { useState } from 'react';
import "./Admission.css";
import Navbar from './Navbar';

// AdmissionForm.jsx


// AdmissionForm.jsx



const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        aadharNo: '',
        course: '',
        phone: '',
        address: '',
        photo: null // New field for photo
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'photo' ? files[0] : value // Handle file input separately
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData);
    };

    return (
        <div className="admission-form-container">
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="aadharNo">Aadhar Number:</label>
                    <input type="text" id="aadharNo" name="aadharNo" value={formData.aadharNo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="course">Course:</label>
                    <select id="course" name="course" value={formData.course} onChange={handleChange} required>
                        <option value="">Select Course</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medical">Medical</option>
                        <option value="Arts">Arts</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Upload Photo:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
