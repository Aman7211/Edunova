import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
const Header = () => {
    const name = localStorage.getItem('name');
  return (
    <div className=' border-b-2'>
    <div className='flex justify-start'>
        <h1 className='text-5xl font-semibold text-[#6a41c6] p-6 mx-10'>PEOPLE.CO</h1>
    </div>
    <div className='flex absolute right-10 top-5'>
    <div className='text-[20px]'> <NotificationsNoneIcon/></div>
    <Link to={'/login'}>
     <div>
        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1724066002~exp=1724069602~hmac=3316748ca1ccee7e0c6748fc66a491edff7f5cd56b0d6c7b7f5795719f917603&w=1380" alt="" className='rounded-full h-[40px] mx-5'/>
     </div>
     </Link>
     <div className='mt-1 text-xl'>
        <h1>{name}</h1>
     </div>
    </div>
    </div>
  )
};

export default Header