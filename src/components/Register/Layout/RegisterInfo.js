import React from 'react';

const RegisterInfo = ({ formData, setFormData }) => {
    return (
        <div className="sign-up-container">

         <input
          type="text"
          placeholder="Mobile..."
          value={formData.mobile}
          onChange={(event) =>
            setFormData({ ...formData, mobile: event.target.value })
          }
        />
        <input
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