import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import frontimg from '../../../acc/istockphoto-1321277096-612x612 1.png'
import logo from '../../../acc/ultimate hrm logo-05-02 2.png'
import Register from '../Register';
import RegisterInfo from './RegisterInfo';
import RegisterPass from './RegisterPass';


const Layout = () => {
    const [page, setPage] = useState(0);
   

    const FormTitles = ["Sign Up From", "Sign Up From", "Sign Up From"];
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        last_Name: "",
        phone_number: "",
      });

   const handleRegister=(data)=>{
    // console.log(data);
    fetch('https://test.nexisltd.com/signup ', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    
  
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

   }

    const PageDisplay = () => {
      if (page === 0) {
        return <Register formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <RegisterInfo formData={formData} setFormData={setFormData} />;
      } else {
        return <RegisterPass formData={formData} setFormData={setFormData} />;
      }
    };
    return (
        
               <div>
            <img className='mt-[62px] ml-[56px]' src={logo} alt="" />
             <div className='grid grid-cols-1 md:grid-cols-2 '>

<div className=' mt-[110px] ml-[128px] mb-[113px]'>
<img src={frontimg} alt="" />
</div>

<div className=' drop-shadow-xl w-[516px] h-[630px] ml-[149px] mt-[19px] mr-[35px] mb-[11] register-from '>
<h2 className='font-semibold pt-[109px] px-[196px] text-xl'>{FormTitles[page]}</h2>

<div className="form">
      
      <div className="form-container">
        <div className="header">
          {/* <h1>{FormTitles[page]}</h1> */}
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button className='ml-[89px]'
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            {page ===0 ? "":"Back"}
            
          </button>
          <button className='text-base bg-[#1678CB] w-[104px] text-[#FFFFFF] rounded-2xl ml-[211px] mb-[176px] mt-3 p-4'
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleRegister(formData);
                alert("FORM SUBMITTED");
               console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next Step"}
          </button>
          
        </div>
      </div>
      <p className='text-center'>Already have an account?<span className='ml-4 text-[#1678CB]'><Link to='/login'>Login HERE!</Link></span> </p>
    </div>


</div>

</div>

        </div>
       
    );
};

export default Layout;