import React from 'react';

const RegisterPass = ({ formData, setFormData }) => {
    return (
        <div className="sign-up-container">
      
        <input className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[74px] mr-[74px] mt-3'
          type="text"
          placeholder="Password..."
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
     
        
      </div>
    );
};

export default RegisterPass;