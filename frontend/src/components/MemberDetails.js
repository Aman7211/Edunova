import React from 'react';

const MemberDetails = ({ member }) => {
  return (
    <div className='rounded-xl'>
        <div className='flex gap-6 bg-[#2a5b7e] text-white m-[-24px] rounded-xl'>
        <img src={member.image} alt={member.name} className="w-20 h-30 mx-4 py-2 rounded-full mb-4" />
      <h2 className="text-2xl font-medium my-6">{member.name}</h2>
      </div>
      <div className='mt-10'>
        <div className='bg-blue-100 px-6 p-2 rounded-xl'>
        <h1>Personal Detail</h1>
        </div>
        <div className='p-2'>
      <p className='py-1'><strong>Status:</strong> {member.status}</p>
      <p className='py-1'><strong>Role:</strong> {member.role}</p>
      <p className='py-1'><strong>Email:</strong> {member.email}</p>
      <p className='py-1'><strong>Team:</strong> {member.team}</p>
      </div>
    </div>
    <div className='mt-2'>
        <div className='bg-blue-100 px-6 p-2 rounded-xl'>
        <h1>Research & Publication</h1>
        </div>
        <div className='p-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus deleniti, magnam placeat, architecto dolore tenetur, illum perspiciatis vero dolorem iure quod nulla labore officiis cupiditate itaque saepe laborum repellendus.
      </div>
    </div>
    </div>
  );
};

export default MemberDetails;
