import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to LMS</h1>
      <p className="text-lg mb-6">Connecting students with tutors for seamless online learning.</p>
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        </Link>
        <Link to="/login">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
