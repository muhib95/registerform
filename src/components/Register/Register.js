import React from 'react';
import  './Register.css';
// import frontimg from '../../acc/istockphoto-1321277096-612x612 1.png'
// import logo from '../../acc/ultimate hrm logo-05-02 2.png'

const Register = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
        <input
          type="text"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
       
      </div>
       
    );
};

export default Register;