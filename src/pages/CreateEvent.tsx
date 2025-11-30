import React, { useState } from 'react';
import Sidenav from '../features/Sidenav';
import UserPanel from '../features/UserPanel';
import Calendar from '../components/Calendar';

const CreateEvent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventCategory: '',
    ticketPrice: '',
    maxAttendees: '',
    eventImage: null
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const tabs = [
    {
      title: "Event Details",
      content: "Fill in the basic information about your event"
    },
    {
      title: "Date & Location", 
      content: "Set when and where your event will take place"
    },
    {
      title: "Ticket Settings",
      content: "Configure pricing and attendance options"
    }
  ];

  const categories = [
    "🎵 Music Concert",
    "💼 Conference", 
    "🔧 Workshop",
    "🤝 Networking",
    "⚽ Sports",
    "🎨 Art Exhibition",
    "🍕 Food & Drink",
    "❤️ Charity",
    "✨ Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<never>) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Event created:', formData);
  };

  return (
    <>
    <div className="flex">
        <Sidenav />
        <UserPanel />
      </div>
      <div className="flex-1 min-h-screen max-w-[70%] sm:max-w-[50%] md:max-w-[65%] lg:max-w-[70%] py-8 flex items-center justify-center">
        <div className="w-full h-[100%] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to right, var(--color-moonstone), var(--color-lightermoonstone))' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -m-8 opacity-20" style={{ backgroundColor: 'var(--color-vanilla)' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -m-6 opacity-30" style={{ backgroundColor: 'var(--color-darkervanilla)' }}></div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                  <div className="text-2xl">🎉</div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Create New Event</h1>
                  <p className="text-lg" style={{ color: 'var(--color-bluewhite)' }}>Share your amazing event with the community! ✨</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300" style={{ backgroundColor: 'var(--color-vanilla)' }}>
                <div className="text-2xl" style={{ color: 'var(--color-moonstone)' }}>⭐</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row overflow-y-auto my-2 overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 200px)', 
                                                                              scrollbarColor: "#E9CC73 transparent"
          }}>
            {/* Left Side - Image Upload & Preview */}
            <div className="lg:w-2/5 p-8" style={{ borderRight: '2px solid var(--color-lightermoonstone)', background: 'linear-gradient(to bottom, var(--color-bluewhite), white)' }}>
              <div className="space-y-8">
                {/* Image Upload */}
                <div className="text-center">
                  <div className="relative group mb-4">
                    <div className="w-56 h-56 rounded-3xl border-4 border-dashed flex items-center justify-center mx-auto cursor-pointer transition duration-300 shadow-inner" 
                         style={{ 
                           borderColor: 'var(--color-lightermoonstone)',
                           backgroundColor: 'var(--color-bluewhite)'
                         }}
                         onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-moonstone)'}
                         onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-lightermoonstone)'}>
                      {formData.eventImage ? (
                        <img 
                          src={URL.createObjectURL(formData.eventImage)} 
                          alt="Event preview" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="text-center p-6">
                          <svg className="w-16 h-16 mx-auto mb-3" style={{ color: 'var(--color-darkervanilla)' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                          <p className="font-medium" style={{ color: 'var(--color-moonstone)' }}>Add Event Photo</p>
                          <p className="text-sm mt-1" style={{ color: 'var(--color-lightermoonstone)' }}>Click to upload</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleInputChange}
                      name="eventImage"
                      accept="image/*"
                    />
                  </div>
                  <p className="text-sm inline-block px-3 py-1 rounded-full border" 
                     style={{ 
                       color: 'var(--color-moonstone)',
                       backgroundColor: 'var(--color-bluewhite)',
                       borderColor: 'var(--color-lightermoonstone)'
                     }}>
                    Recommended: 800x800px
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="rounded-2xl p-6 shadow-lg border-2" 
                     style={{ 
                       backgroundColor: 'white',
                       borderColor: 'var(--color-lightermoonstone)'
                     }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Event Tips
                  </h3>
                  <ul className="space-y-3" style={{ color: 'var(--color-moonstone)' }}>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                       <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                      <span>Add clear, high-quality images</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Write detailed descriptions</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                       <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-moonstone)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Set realistic pricing</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-moonstone)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span>Choose the right category</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Form Content */}
            <div className="lg:w-3/5">
              {/* Navigation Tabs */}
              <div style={{ 
                borderBottom: '2px solid var(--color-lightermoonstone)',
                background: 'linear-gradient(to right, var(--color-bluewhite), white)'
              }}>
                <ul className="flex">
                  {tabs.map((tab, index) => (
                    <li 
                      key={index}
                      onClick={() => setActiveTab(index)} 
                      className={`px-8 py-5 cursor-pointer transition duration-300 flex items-center flex-1 justify-center ${
                        activeTab === index 
                          ? 'text-white font-bold shadow-sm' 
                          : 'hover:text-white hover:bg-white/50'
                      }`}
                      style={{ 
                        borderBottom: activeTab === index ? `4px solid var(--color-vanilla)` : 'none',
                        backgroundColor: activeTab === index ? 'white' : 'transparent',
                        color: activeTab === index ? 'var(--color-moonstone)' : 'var(--color-lightermoonstone)'
                      }}
                    >
                      <span className="text-2xl mr-3">{tab.icon}</span>
                      <span className="font-semibold">{tab.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form Content */}
              <div className="p-8 bg-white">
                <form onSubmit={handleSubmit}>
                  {/* Tab 1: Event Details */}
                  <div className={`space-y-6 ${activeTab === 0 ? 'block' : 'hidden'}`}>
                    <div>
                      <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Event Title
                      </label>
                      <input
                        type="text"
                        name="eventTitle"
                        value={formData.eventTitle}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                        style={{ 
                          borderColor: 'var(--color-lightermoonstone)',
                          backgroundColor: 'rgba(236, 251, 253, 0.3)',
                          color: 'var(--color-moonstone)'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-moonstone)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-lightermoonstone)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="Enter a catchy event title..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Event Description
                      </label>
                      <textarea
                        name="eventDescription"
                        value={formData.eventDescription}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                        style={{ 
                          borderColor: 'var(--color-lightermoonstone)',
                          backgroundColor: 'rgba(236, 251, 253, 0.3)',
                          color: 'var(--color-moonstone)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-moonstone)';
                          e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-lightermoonstone)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Describe your event in detail. What can attendees expect?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 2a1 1 0 000 2h10a1 1 0 100-2H5z" clipRule="evenodd" />
                        </svg>
                        Event Category
                      </label>
                      <select
                        name="eventCategory"
                        value={formData.eventCategory}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300 appearance-none"
                        style={{ 
                          borderColor: 'var(--color-lightermoonstone)',
                          backgroundColor: 'rgba(236, 251, 253, 0.3)',
                          color: 'var(--color-moonstone)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-moonstone)';
                          e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-lightermoonstone)';
                          e.target.style.boxShadow = 'none';
                        }}
                        required
                      >
                        <option value="" style={{ color: 'var(--color-lightermoonstone)' }}>Select a category...</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category} style={{ color: 'var(--color-moonstone)' }}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tab 2: Date & Location */}
                  <div className={`space-y-6 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Event Date with Popup Calendar */}
                      <div className="relative">
                        <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          Event Date
                        </label>

                        <div className="relative">
                          {/* DATE INPUT (typing allowed) */}
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={(e) =>
                              setFormData(prev => ({ ...prev, eventDate: e.target.value }))
                            }
                            className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                            style={{ 
                              borderColor: 'var(--color-lightermoonstone)',
                              backgroundColor: 'rgba(236, 251, 253, 0.3)',
                              color: 'var(--color-moonstone)'
                            }}
                            placeholder="yyyy-mm-dd"
                          />

                          <span
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ color: 'var(--color-moonstone)' }}
                          >
                            <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </span>

                          {/* POPUP CALENDAR */}
                          {showCalendar && (
                            <div className="absolute z-50 mt-3 shadow-xl rounded-xl border bg-white">
                              <Calendar
                                selectedDate={
                                  formData.eventDate ? new Date(formData.eventDate) : null
                                }
                                onDateSelect={(date) => {
                                  const formatted = date.toISOString().split("T")[0];
                                  setFormData(prev => ({ ...prev, eventDate: formatted }));
                                  setShowCalendar(false);
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                          <span className="text-2xl mr-3">⏰</span>
                          Event Time
                        </label>
                        <input
                          type="time"
                          name="eventTime"
                          value={formData.eventTime}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                          style={{ 
                            borderColor: 'var(--color-lightermoonstone)',
                            backgroundColor: 'rgba(236, 251, 253, 0.3)',
                            color: 'var(--color-moonstone)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--color-moonstone)';
                            e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--color-lightermoonstone)';
                            e.target.style.boxShadow = 'none';
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                        <span className="text-2xl mr-3">📍</span>
                        Event Location
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                        style={{ 
                          borderColor: 'var(--color-lightermoonstone)',
                          backgroundColor: 'rgba(236, 251, 253, 0.3)',
                          color: 'var(--color-moonstone)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-moonstone)';
                          e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-lightermoonstone)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Enter venue or address... 🏢"
                        required
                      />
                    </div>
                  </div>

                  {/* Tab 3: Ticket Settings */}
                  <div className={`space-y-6 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                          <span className="text-2xl mr-3">💰</span>
                          Ticket Price ($)
                        </label>
                        <input
                          type="number"
                          name="ticketPrice"
                          value={formData.ticketPrice}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                          style={{ 
                            borderColor: 'var(--color-lightermoonstone)',
                            backgroundColor: 'rgba(236, 251, 253, 0.3)',
                            color: 'var(--color-moonstone)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--color-moonstone)';
                            e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--color-lightermoonstone)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                          <span className="text-2xl mr-3">👥</span>
                          Max Attendees
                        </label>
                        <input
                          type="number"
                          name="maxAttendees"
                          value={formData.maxAttendees}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 text-lg transition duration-300"
                          style={{ 
                            borderColor: 'var(--color-lightermoonstone)',
                            backgroundColor: 'rgba(236, 251, 253, 0.3)',
                            color: 'var(--color-moonstone)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--color-moonstone)';
                            e.target.style.boxShadow = '0 0 0 2px var(--color-vanilla)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--color-lightermoonstone)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="Unlimited"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-8 mt-8" style={{ borderTop: '2px solid var(--color-lightermoonstone)' }}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                      className={`px-8 py-4 rounded-2xl font-bold text-lg transition duration-300 flex items-center transform hover:scale-105 ${
                        activeTab === 0 
                          ? 'invisible' 
                          : 'text-white shadow-lg'
                      }`}
                      style={{ 
                        backgroundColor: activeTab === 0 ? 'transparent' : 'var(--color-lightermoonstone)'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== 0) {
                          e.currentTarget.style.backgroundColor = 'var(--color-moonstone)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== 0) {
                          e.currentTarget.style.backgroundColor = 'var(--color-lightermoonstone)';
                        }
                      }}
                    >
                      <span className="text-xl mr-2">⬅️</span>
                      Previous
                    </button>

                    {activeTab < tabs.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setActiveTab(prev => Math.min(tabs.length - 1, prev + 1))}
                        className="px-8 py-4 text-white rounded-2xl font-bold text-lg transition duration-300 flex items-center shadow-lg transform hover:scale-105"
                        style={{ backgroundColor: 'var(--color-moonstone)' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-lightermoonstone)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-moonstone)'}
                      >
                        Next
                        <span className="text-xl ml-2">➡️</span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-10 py-4 rounded-2xl font-bold text-lg transition duration-300 flex items-center shadow-lg transform hover:scale-105"
                        style={{ 
                          backgroundColor: 'var(--color-vanilla)',
                          color: 'var(--color-moonstone)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-darkervanilla)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vanilla)'}
                      >
                        <span className="text-xl mr-2">🎉</span>
                        Create Event!
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateEvent;