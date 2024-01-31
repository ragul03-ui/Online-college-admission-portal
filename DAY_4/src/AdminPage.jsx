// AdminPage.jsx

import React, { useState, useEffect } from 'react';
import "./AdminPage.css";
import Navbar from './Navbar';

const AdminPage = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        // Fetch admission form data from the server or API
        fetch('http://example.com/api/admissionFormData')
            .then(response => response.json())
            .then(data => setFormData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Navbar/>
            <h2>Admin Page - View Admission Form Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Aadhar No</th>
                        <th>Course</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.aadharNo}</td>
                            <td>{data.course}</td>
                            <td>{data.phone}</td>
                            <td>{data.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
