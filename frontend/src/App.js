import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PeopleDirectory from './components/PeopleDirectory';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Header/>
      <div className="flex h-screen">
        <Sidebar />
        <div className="bg-white flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path="/people-directory" element={<PeopleDirectory />} />
          </Routes>
        </div>
      </div>
      </>
  );
}

export default App;
