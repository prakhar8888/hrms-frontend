import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 p-4 text-white flex gap-4'>
      <Link to='/'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/candidates'>Candidates</Link>
      <Link to='/jobs'>Jobs</Link>
    </nav>
  );
}
