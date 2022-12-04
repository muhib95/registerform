
import { Link, useNavigate } from 'react-router-dom';
import frontimg from '../../acc/istockphoto-1321277096-612x612 1.png'
import logo from '../../acc/ultimate hrm logo-05-02 2.png'

const LogIn = () => {
  let navigate = useNavigate();


  const handleLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const userInfo={
        email,
        password
    }
    fetch('https://test.nexisltd.com/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('access_token',data.access_token)
            // localStorage.setItem('refresh_token',data.refresh_token)
          console.log('Success:', data);
          navigate('/attandents');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    // console.log(userInfo);
  }

// console.log(localStorage.getItem('access_token'));
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
    <form className='flex flex-col' onSubmit={handleLogIn}>
        <input type="email" name="email"  placeholder='Write Email Address' className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[74px] mr-[74px] mt-3'/>
        <input type="password" name="password" placeholder='Write Password'  className='text-[ #B4B4B4] border border-[#A4A4A4] ml-[74px] mr-[74px] mt-14'/>
        <p className='text-xs ml-[74px] mr-[74px]'>Your password must be 8 character</p>
        <button className='text-base bg-[#1678CB] w-[104px] text-[#FFFFFF] rounded-2xl ml-[211px] mb-[176px] mt-3 p-4'  type="submit">Log in</button>
    </form>

         

</div>
<p className='text-center'>Don’t have an account?<span className='ml-4 text-[#1678CB]'><Link to='/'>SIGNUP HERE!</Link></span> </p>
</div>

</div>

        </div>
        </div>
    );
};

export default LogIn;