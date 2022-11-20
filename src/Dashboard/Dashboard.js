import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../Context/Context';

const Dashboard = () => {
    const [state,setState]= useContext(UserContext)
    const {isUser} =useContext(UserContext)
    
   

    
     
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <h2 className="text-3xl font-bold text-purple-500">
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {state !== null  && <>
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            </>
            }
            {state && state.isUser.isAdmin===true  &&   <>
              <li>
              <Link to="/newParkingSpace">New Parking Space</Link>
            </li>
            <li>
              <Link to="/user">All User</Link>
            </li>
              <li>
              <Link to="/AllParking">ALL Parking </Link>
            </li>
              <li>  
              <Link to="/AllParkingSlot">All ParkingSlot</Link>
            </li>
            
            </>}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;