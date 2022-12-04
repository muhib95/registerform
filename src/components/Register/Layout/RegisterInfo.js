import React from 'react';

const RegisterInfo = ({ formData, setFormData }) => {
    return (
        <div className="sign-up-container">

         <input className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[74px] mr-[74px] mt-3'
          type="text"
          placeholder="Mobile..."
          value={formData.phone_number}
          onChange={(event) =>
            setFormData({ ...formData, phone_number: event.target.value })
          }
        />
        <input className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[74px] mr-[74px] mt-3'
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
     
        
      </div>
    );
};

export default RegisterInfo;