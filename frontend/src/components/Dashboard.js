import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const name = localStorage.getItem('name');
  return (
    <div className="flex border-2 rounded-xl h-[100vh]">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome , {name} !</h1>
      </main>
    </div>
  );
};

export default Dashboard;
