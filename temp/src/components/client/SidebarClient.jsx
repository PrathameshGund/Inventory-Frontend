import React from 'react';
import './SidebarClient.css';
import { Link } from 'react-router-dom';
// import {motion} from 'framer-motion';
// import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='Main'>
      <h2 className='Title'>Client</h2>
      <Link className='active' to="/Dashboard">Catelog</Link>
      <Link to="/Order">Post Order</Link>
      <Link to="/Order">My Orders </Link>
      <Link to="/Cli">Generate Invoice</Link>
      
      <img className='profile'src="https://shorturl.at/giBI9" alt="" />
    </div>
  );
};

export default Sidebar;
