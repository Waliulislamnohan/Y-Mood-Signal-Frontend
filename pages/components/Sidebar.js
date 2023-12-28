// components/Sidebar.js
import React from 'react';

const Sidebar = ({ isHidden }) => {
  return (
    <div id="sideNav" className={`lg:block ${isHidden ? 'hidden' : ''} bg-white w-64 h-screen fixed rounded-none border-none mt-20`}>
        {/* Items */}
        <div className="p-4 space-y-4">


        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-wallet"></i>
                <span>Bill</span>
            </a>


            {/* Inicio */}
            <a href="#" aria-label="dashboard"
                className="px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-blue-500 ">
                <i className="fas fa-home text-white"></i>
                <span className="-mr-1 font-medium">Dashboard</span>
            </a>

            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-exchange-alt"></i>
                <span>Transection</span>
            </a>

            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-user"></i>
                <span>User profile</span>
            </a>

            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </a>
        </div>
    </div>
  );
};

export default Sidebar;
