import React, { useState } from 'react';
import AddMemberForm from './AddMemberForm';
import EditMemberForm from './EditMemberForm';
import MemberDetails from './MemberDetails';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Modal from './Modal';
import Modal1 from './Modal1';

const PeopleDirectory = () => {
  const [data, setData] = useState([
    {
      name: 'Olivia Rhye',
      role: 'Product Designer',
      team: 'Design',
      email: 'olivia@untitledui.com',
      status: 'Active',
      image: 'https://i.pravatar.cc/300?img=1',
    },
    {
      name: 'Phoenix Baker',
      role: 'Product Manager',
      team: 'Design',
      email: 'phoenix@untitledui.com',
      status: 'Active',
      image: 'https://i.pravatar.cc/300?img=2',
    },
    {
        name: 'Lana Steiner',
        role: 'Frontend Developer',
        team: 'Design',
        email: 'lana@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=3',
      },
      {
        name: 'Demi Wilkinson',
        role: 'Backend Developer',
        team: 'Design',
        email: 'demi@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=4',
      },
      {
        name: 'Candice Wu',
        role: 'Fullstack Developer',
        team: 'Design',
        email: 'candice@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=5',
      },
      {
        name: 'Natali Craig',
        role: 'UX Designer',
        team: 'Design',
        email: 'natali@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=6',
      },
      {
        name: 'Drew Cano',
        role: 'UX Copywriter',
        team: 'Design',
        email: 'drew@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=7',
      },
      {
        name: 'Orlando Diggs',
        role: 'UI Designer',
        team: 'Design',
        email: 'orlando@untitledui.com',
        status: 'Active',
        image: 'https://i.pravatar.cc/300?img=8',
      },
    // Additional members...
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMember, setIsAddMember] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null); // New state for detail view

  const handleAddMember = () => {
    setIsAddMember(true);
    setIsModalOpen(true);
  };

  const handleEditMember = (index) => {
    setIsAddMember(false);
    setSelectedMember(data[index]);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleUpdateMember = (updatedMember) => {
    const updatedData = [...data];
    updatedData[editingIndex] = updatedMember;
    setData(updatedData);
    handleCloseModal();
  };

  const handleAddNewMember = (newMember) => {
    setData([...data, newMember]);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    setIsAddMember(false);
    setEditingIndex(null);
    setSelectedDetail(null); // Close detail view when modal is closed
  };

  const deleteMember = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleRowClick = (member) => {
    setSelectedDetail(member);
  };

  return (
    <div className="p-6 border-2 rounded-xl">
      <div className="flex">
        <h1 className="text-2xl font-medium mb-6">
          Team Members
          <span className="text-[15px] text-[#6A41C6] mx-5 p-1 px-2 mt-[-8px] bg-[#faf5ff] border-2 rounded-full">
            {data.length} users
          </span>
        </h1>
        <div className="flex items-center mb-4">
          <div className="flex items-center absolute right-10">
            <input
              type="text"
              placeholder="Search..."
              className="border border-b-2 border-gray-600 p-2 pr-28 rounded mr-2"
            />
            <FilterAltOutlinedIcon fontSize="large" className="mx-2" />
            <button
              className="bg-[#6A41C6] text-white p-2 px-4 font-medium py-[11px] rounded"
              onClick={handleAddMember}
            >
              + ADD MEMBER
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Email address</th>
              <th className="border p-2">Teams</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(member)} // Handle row click
              >
                <td className="border p-2">
                  <div className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <span>{member.name}</span>
                  </div>
                </td>
                <td className="border p-2">{member.status}</td>
                <td className="border p-2">{member.role}</td>
                <td className="border p-2">{member.email}</td>
                <td className="border p-2 flex">
                  <div className="flex">
                    <span className="border p-2 rounded-full bg-purple-100 mr-1">
                      {member.team}
                    </span>
                    <div className="p-2 flex justify-end mx-2">
                      <button onClick={(e) => { e.stopPropagation(); deleteMember(index); }}>
                        <DeleteOutlineOutlinedIcon />
                      </button>
                      <button
                        className="mx-2"
                        onClick={(e) => { e.stopPropagation(); handleEditMember(index); }}
                      >
                        <EditOutlinedIcon />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {isAddMember ? (
            <AddMemberForm addMember={handleAddNewMember} />
          ) : (
            <EditMemberForm
              memberData={selectedMember}
              onUpdateMember={handleUpdateMember}
            />
          )}
        </Modal>
      )}

      {selectedDetail && (
        <Modal1 onClose={handleCloseModal}>
          <MemberDetails member={selectedDetail} />
        </Modal1>
      )}
    </div>
  );
};

export default PeopleDirectory;
