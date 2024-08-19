import React from 'react';
import { NavLink } from 'react-router-dom';
import WindowIcon from '@mui/icons-material/Window';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[15%] p-6">
      <div className="my-10 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center ${isActive ? 'text-[#6A41C6]' : 'text-gray-800'}`
          }
        >
          <WindowIcon className="mx-1" />
          <span className="font-medium">Overview</span>
        </NavLink>
      </div>
      <div className="mb-4 text-xl">
        <NavLink
          to="/people-directory"
          className={({ isActive }) =>
            `flex items-center ${isActive ? 'text-[#6A41C6]' : 'text-gray-800'}`
          }
        >
          <WindowIcon className="mx-1" />
          <span className="font-medium">People Directory</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
