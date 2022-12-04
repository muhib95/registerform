import React from 'react';
import  './Register.css';
// import frontimg from '../../acc/istockphoto-1321277096-612x612 1.png'
// import logo from '../../acc/ultimate hrm logo-05-02 2.png'

const Register = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
        <input className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[89px] mr-[74px] mt-3'
          type="text"
          placeholder="First Name..."
          value={formData.first_name}
          onChange={(e) => {
            setFormData({ ...formData, first_name: e.target.value });
          }}
        />
        <input className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[89px] mr-[74px] mt-3'
          type="text"
          placeholder="Last Name..."
          value={formData.last_Name}
          onChange={(e) => {
            setFormData({ ...formData, last_Name: e.target.value });
          }}
        />
       
      </div>
       
    );
};

export default Register;