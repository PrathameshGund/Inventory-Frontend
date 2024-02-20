import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import {motion} from 'framer-motion';
// import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='Main'>
      <h2 className='Title'>Inventory Management</h2>
      <Link className='active' to="/Dashboard">Dashboard</Link>
      <Link to="/Warehouse">Warehouse</Link>
      <Link to="/Order"> Orders </Link>
      {/* <Link to="/Cli">Client</Link> */}
      
      <img className='profile'src="https://shorturl.at/giBI9" alt="" />
    </div>
  );
};

export default Sidebar;
