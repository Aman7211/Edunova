// src/components/AddMemberForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  team: z.string().min(1, 'Team is required'),
});

const AddMemberForm = ({ addMember }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    addMember(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div>
            <h1 className='text-2xl font-bold'>Add Member </h1>
        </div>
        <div>
       <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1724066002~exp=1724069602~hmac=3316748ca1ccee7e0c6748fc66a491edff7f5cd56b0d6c7b7f5795719f917603&w=1380" alt="" className='h-[160px] rounded-full mx-auto my-4'/>
        </div>
        <div className='flex mx-[200px] my-10'>
            <button className='bg-gray-200 p-2 px-4 mx-2 rounded-xl border'>
            <ReplayOutlinedIcon /> CHANGE PHOTO
            </button>
            <button className='bg-gray-200 p-2 px-4 mx-2 rounded-xl border'>
            <DeleteOutlineOutlinedIcon /> REMOVE PHOTO
            </button>
        </div>
        <div className='flex'>
      <div className="mb-4 w-[45%] mx-4">
        <label className="block text-gray-700">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} className="border p-2 rounded w-full" />}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-4 w-[45%] mx-4">
        <label className="block text-gray-700">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} className="border p-2 rounded w-full" />}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      </div>

      <div className='flex'>
     
      <div className="mb-4 w-[45%] mx-4">
        <label className="block text-gray-700">Role</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => <input {...field} className="border p-2 rounded w-full" />}
        />
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>
      <div className="mb-4 w-[45%] mx-4">
        <label className="block text-gray-700">Status</label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => <input {...field} className="border p-2 rounded w-full" />}
        />
        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
      </div>
      
      </div>
      <div className="mb-4 w-[94%] mx-4">
        <label className="block text-gray-700">Team</label>
        <Controller
          name="team"
          control={control}
          render={({ field }) => <input {...field} className="border p-2 rounded w-full" />}
        />
        {errors.team && <p className="text-red-500">{errors.team.message}</p>}
      </div>
      <button type="submit" className="bg-[#6A41C6] text-white  rounded px-4 p-3 mx-4">Save</button>
    </form>
  );
};

export default AddMemberForm;
