
import frontimg from '../../acc/ultimate hrm logo-05-02 2.png'
import React, { useEffect, useState} from 'react';

const Attadents = () => {

const [users,setUser]=useState([]);






// const [att,setA]=useState([]);
  // const token=localStorage.getItem('access_token');
  // console.log(token);
    useEffect(()=>{
        fetch('https://test.nexisltd.com/test',{ 
        headers: {
          'Content-Type': 'application/json',
          Authorization:`Bearer ${localStorage.getItem('access_token')}`
         
       
       
       
          
        }
    
      })
        .then((response) => response.json())
      .then((data)=>{
        setUser(Object.values(data));
// console.log(Object.values(data));
      })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

console.log(users);
  
    return (
      <div>
        <div className=' mt-[110px] ml-[128px] mb-[113px]'>
<img src={frontimg} alt="" />
</div>
      <h2 className='text-4xl w-[480px] mt-[139px] ml-[535px] bg-[#1678CB] text-white pt-[17px] pb-[19px] pl-[55px] pr-[42px]'>Attendance information</h2>
      <div className='mt-7'>
      {
          users.map(user =>
              <div>
                  <div className="date">
                      <table class="border-collapse w-full">
                          <thead>
                              <tr>
                                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Name</th>
                                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">info</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                      {user.name}
                                  </td>

                                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                      {
                                          Object.keys(user.attendance).map(u => <p>{u}</p>)
                                      }
                                  </td>

                                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                      {
                                          Object.values(user.attendance).map(u => <p>{u.status}</p>)
                                      }
                                  </td>
                              </tr>

                          </tbody>
                      </table>
                  </div>
              </div>
          )
      }
      </div>
    
  </div >
    );
};

export default Attadents;