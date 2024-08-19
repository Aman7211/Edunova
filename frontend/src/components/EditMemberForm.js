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
  img: z.string().min(1,'Image is required')
});

const EditMemberForm = ({ memberData, onUpdateMember }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: memberData.name,
      role: memberData.role,
      team: memberData.team,
      img: memberData.image, // Ensure the image URL is correctly passed
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    onUpdateMember(data);
  };

  const handleRemovePhoto = () => {
    setValue('img', '');
  };

  const handleChangePhoto = () => {
    // This would typically open a file picker or similar to change the photo
    const newImageUrl = prompt('Enter new image URL:');
    if (newImageUrl) {
      setValue('img', newImageUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Member</h2>
      <div>
        <Controller
          name="img"
          control={control}
          render={({ field }) => (
            <img src={field.value} alt="" className="h-[160px] rounded-full mx-auto my-4" />
          )}
        />
      </div>
      <div className="flex mx-[200px] my-10">
        <button
          type="button"
          className="bg-gray-200 p-2 px-4 mx-2 rounded-xl border"
          onClick={handleChangePhoto}
        >
          <ReplayOutlinedIcon /> CHANGE PHOTO
        </button>
        <button
          type="button"
          className="bg-gray-200 p-2 px-4 mx-2 rounded-xl border"
          onClick={handleRemovePhoto}
        >
          <DeleteOutlineOutlinedIcon /> REMOVE PHOTO
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`border p-2 rounded w-full ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Role</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`border p-2 rounded w-full ${
                errors.role ? 'border-red-500' : ''
              }`}
            />
          )}
        />
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Team</label>
        <Controller
          name="team"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`border p-2 rounded w-full ${
                errors.team ? 'border-red-500' : ''
              }`}
            />
          )}
        />
        {errors.team && (
          <p className="text-red-500 text-sm mt-1">{errors.team.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#6A41C6] text-white p-2 rounded "
        >
          Update Member
        </button>
      </div>
    </form>
  );
};

export default EditMemberForm;
