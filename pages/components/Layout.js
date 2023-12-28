// components/Layout.js
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from '../../styles/Home.module.css'
const Layout = () => {
    const [isSidebarHidden, setSidebarHidden] = useState(true);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };


        const [videoLink, setVideoLink] = useState('');
        const [videoData, setVideoData] = useState(null);
      
        const handleSubmit = async () => {
            try {
              const response = await fetch('/api/getComments', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ video_url: videoLink }),
              });
          
              const text = await response.text();
              let data = null;
          
              // Check if the response contains valid JSON
              if (text.trim().startsWith('{') && text.trim().endsWith('}')) {
                data = JSON.parse(text);
                console.log('Data received:', data);
              } else {
                console.log('Invalid JSON or empty response');
                // Handle the case where the response is not valid JSON or empty
              }
        
              setVideoData(data);
            } catch (error) {
              console.error('Error fetching video data:', error);
            }
          };
          
          

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar isHidden={isSidebarHidden} />

            {/* Main Content */}
            <div className="flex-1 bg-gray-200">
                <nav className="bg-white border-b border-gray-300">
                    <div className="flex justify-between items-center px-9">
                        <button id="menuBtn" onClick={toggleSidebar}>
                            <i className="fas fa-bars  text-blue-500 text-lg"></i>
                        </button>

                        {/* Logo */}
                        <Link href="/home">
                        <div className="ml-1">
                            <img src="https://th.bing.com/th/id/OIP.x9engTBsXs4UrYmCB9VBEAHaEt?pid=ImgDet&rs=1" alt="logo" className="h-15 w-20 p-3" />
                        </div>
                        </Link>
                        {/* Notification and Profile Icons */}
                        <div className="space-x-4">
                            <button>
                                <i className="fas fa-bell text-blue-500 text-lg"></i>
                            </button>
                            <button>
                                <i className="fas fa-user text-blue-500 text-lg"></i>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main Page Content */}
                <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">



                    {/* Tabla */}
                    <div>
      <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
        <div className="flex items-center">
          <i className="px-3 fas fa-search ml-1"></i>
          <input
            type="text"
            placeholder="Paste Youtube video link"
            className="ml-3 focus:outline-none w-full"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      {videoData && (
        <div className="bg-white rounded-lg p-4 shadow-md my-4">
          {/* Display fetched data */}
          {/* Replace the keys below with the actual response keys */}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b-2 w-full">
                  <h2 className="text-ml font-bold text-gray-600">Analytics</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b w-full">
              <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Views</h2>
                    <p>{videoData.views}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Likes</h2>
                    <p>{videoData.likes}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comments</h2>
                    <p>{videoData.total_comments}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Negative Comments</h2>
                    <p>{videoData.negative_comments_count}%</p>
                  </div>
                </td>
                {/* Add other data points similarly */}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout
