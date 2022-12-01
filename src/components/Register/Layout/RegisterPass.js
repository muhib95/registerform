import React from 'react';

const RegisterPass = ({ formData, setFormData }) => {
    return (
        <div className="sign-up-container">
      
        <input
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