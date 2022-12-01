
import frontimg from '../../acc/istockphoto-1321277096-612x612 1.png'
import logo from '../../acc/ultimate hrm logo-05-02 2.png'

const LogIn = () => {


  const handleLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const userInfo={
        email,
        password
    }
    console.log(userInfo);
  }

// console.log(formData);
    return (
        <div>
                     <div>
            <img className='mt-[62px] ml-[56px]' src={logo} alt="" />
             <div className='grid grid-cols-1 md:grid-cols-2 '>

<div className=' mt-[110px] ml-[128px] mb-[113px]'>
<img src={frontimg} alt="" />
</div>

<div className=' drop-shadow-xl w-[516px] h-[630px] ml-[149px] mt-[19px] mr-[35px] mb-[11] register-from '>
<h2 className='font-semibold pt-[109px] px-[196px] text-xl'>Log in Form</h2>
<div className="sign-up-container">
    <form onSubmit={handleLogIn}>
        <input type="email" name="email"  />
        <input type="password" name="password"  />
        <button type="submit">Submit</button>
    </form>

         

</div>
</div>

</div>

        </div>
        </div>
    );
};

export default LogIn;