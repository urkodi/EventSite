import React, { useState } from 'react';
import Sidenav from '../features/Sidenav';
import useUserStore from '../lib/userStore';

import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useUserStore();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Your Posts",
      content: "Type Here."
    },
    {
      title: "User Reviews",
      content: "Type Here."
    },
    {
      title: "Account Setting",
      content: "Type Here."
    }
  ];

  return (
    <>
    <div className="flex lg:flex-row flex-col">
        <Sidenav />
    </div>

    <div className="h-screen py-8 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full h-[100%] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Profile Picture Column */}
          <div className="md:w-1/4 h-screen bg-gradient-to-b from-lightermoonstone to-moonstone px-8 flex flex-col items-center justify-center space-y-6">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img 
                  src="./bg.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-vanilla transition-all duration-300"></div>
              <button className="absolute bottom-2 right-2 bg-[#FFEBAF] text-[#4C9DB0] p-2 rounded-full shadow-md hover:bg-[#E9CC73] transition duration-200 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{user?.firstName || "USER"}</h3>
              <div className="flex items-center justify-center text-[#ECFBFD]">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <form className="text-sm">Rhode Island, USA</form>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 w-full mb-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-1">4.5</h3>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#FFEBAF]' : 'text-white/50'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#ECFBFD] text-sm">123 reviews</span>
              </div>
            </div>
          </div>

          {/* Right Side - Main Content(Add more later) */}
          <div className="md:w-3/4">
            {/* Profile Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#9CCED6] bg-gradient-to-r from-white to-lightermoonstone">
              <div className="flex items-center space-x-6">
                <div className="profile-nav-info">
                  <h3 className="text-2xl font-bold text-moonstone">Welcome Back!</h3>
                  <p className="text-moonstone">Manage your profile and content</p>
                </div>
              </div>
              <div className="profile-option">
                <div className="notification relative">
                  <div className="bg-[#FFEBAF] p-3 rounded-full shadow-md hover:bg-[#E9CC73] transition duration-200 cursor-pointer">
                    <svg className="w-6 h-6 text-[#4C9DB0]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-[#4C9DB0] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* left info panel(keep working) */}
              <div className="md:w-1/3 p-6 border-r border-[#9CCED6] bg-[#ECFBFD]/30">
                <div className="space-y-6">
                  <div className="flex items-center text-[#4C9DB0] p-3 bg-white rounded-lg shadow-sm">
                    <svg className="w-5 h-5 mr-3 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-medium">+4013321145</span>
                  </div>
                  
                  <div className="flex items-center text-[#4C9DB0] p-3 bg-white rounded-lg shadow-sm">
                    <svg className="w-5 h-5 mr-3 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <form className="font-medium">user123@email.com</form>
                  </div>
                  
                  <div className="user-bio bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#4C9DB0] mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Bio
                    </h3>
                    <form className="text-moonstone text-sm leading-relaxed">
                      Insert bio here.
                    </form>
                  </div>
                  
                  <div className="profile-btn flex space-x-3">
                    <button className="chatbtn flex items-center justify-center px-4 py-3 bg-[#4C9DB0] text-white rounded-lg hover:bg-[#3a8a9d] transition duration-200 shadow-md flex-1">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      Chat
                    </button>
                    <Link to="/create-event" className="createbtn flex items-center justify-center px-4 py-3 bg-[#FFEBAF] text-[#4C9DB0] rounded-lg hover:bg-[#E9CC73] transition duration-200 shadow-md flex-1">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Create
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* right content area */}
              <div className="md:w-2/3">
                {/* navigation tabs(need arrows later) */}
                <div className="nav border-b border-[#9CCED6] bg-gradient-to-r from-[#ECFBFD] to-white">
                  <ul className="flex">
                    {tabs.map((tab, index) => (
                      <li 
                        key={index}
                        onClick={() => setActiveTab(index)} 
                        className={`px-6 py-4 cursor-pointer transition duration-200 flex items-center ${
                          activeTab === index 
                            ? 'border-b-2 border-[#4C9DB0] text-[#4C9DB0] font-bold bg-white' 
                            : 'text-[#9CCED6] hover:text-[#4C9DB0] hover:bg-white/50'
                        }`}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM3 10a1 1 0 01-1-1V7a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H3zM3 16a1 1 0 01-1-1v-2a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H3z" />
                        </svg>
                        {tab.title}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* tab content (Add arrow keys)*/}
                <div className="profile-body p-6 bg-white">
                  <div className={`tab ${activeTab === 0 ? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl font-bold text-[#4C9DB0] mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {tabs[0].title}
                    </h1>
                    <p className="text-[#4C9DB0] leading-relaxed bg-[#ECFBFD] p-4 rounded-lg">{tabs[0].content}</p>
                  </div>
                  
                  <div className={`tab ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl font-bold text-[#4C9DB0] mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      {tabs[1].title}
                    </h1>
                    <p className="text-[#4C9DB0] leading-relaxed bg-[#ECFBFD] p-4 rounded-lg">{tabs[1].content}</p>
                  </div>
                  
                  <div className={`tab ${activeTab === 2 ? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl font-bold text-[#4C9DB0] mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-[#9CCED6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      {tabs[2].title}
                    </h1>
                    <p className="text-[#4C9DB0] leading-relaxed bg-[#ECFBFD] p-4 rounded-lg">{tabs[2].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;