import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import Searchbar from '../searchbar/Searchbar';
import Charts from '../graph/BarGraph/Charts';
import Sidebar from '../sidebar/Sidebar';
import Pie from '../graph/PieChart/Pie'
const Dashboard = () => {
  return (
    <>
    <Searchbar/>
    <div className='sidebar'>
    <Sidebar/>
    </div>
    <div className='Card'>
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>Sales</h2>
          <p>$10,000</p>
        </div>
        <div className="dashboard-card">
          <h2>Inventory</h2>
          <p>500</p>
        </div>
        <div className="dashboard-card">
          <h2>Profit</h2>
          <p>60%</p>
        </div>
        <div className="dashboard-card">
          <h2>Goods Sold</h2>
          <p>500 units</p>
        </div>
        <div className='dashboard-card'>
          <h2>Income</h2>
          <p>$2000</p>
        </div>
      </div>
    </div>
    <div className='flex-container'>

    <div className='flex-child bar'>
    <Charts/>
    </div>
    <div className='flex child pie'>
      <Pie/>
    </div>
    </div>    
    </>
  );
};

export default Dashboard;



