import React, { useState } from 'react';
import Sidenav from '../features/Sidenav';
import UserPanel from '../features/UserPanel';
import Calendar from '../components/Calendar';
import { useNavigate } from "react-router-dom";

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
  { label: "🎵 Music Concert", value: "music_concert" },
  { label: "💼 Conference", value: "conference" },
  { label: "🔧 Workshop", value: "workshop" },
  { label: "🤝 Networking", value: "networking" },
  { label: "⚽ Sports", value: "sports" },
  { label: "🎨 Art Exhibition", value: "art_exhibition" },
  { label: "🍕 Food & Drink", value: "food_drink" },
  { label: "❤️ Charity", value: "charity" },
  { label: "✨ Other", value: "other" }
];


const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, files } = e.target as HTMLInputElement;

  setFormData(prev => ({
    ...prev,
    [name]: files ? files[0] : value 
  }));
};



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Event created:', formData);
  };

  //const [responseData, setResponseData] = useState<Record<string, unknown> | null>(null);
const navigate = useNavigate();

const createAnEvent = async () => {
  const fd = new FormData();

  //*****The owner field needs to change when the cookies or some session logic of who is logged in is added
  fd.append("owner", "1");
  fd.append("title", formData.eventTitle);
  fd.append("description", formData.eventDescription);
  fd.append("category", formData.eventCategory);
  fd.append("date", formData.eventDate);
  fd.append("time", formData.eventTime);
  fd.append("address", formData.eventLocation);
  fd.append("ticket_price", formData.ticketPrice);
  fd.append("max_attendees", formData.maxAttendees);

  if (formData.eventImage) {
    fd.append("image_path", formData.eventImage); 
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/events/create", {
      method: "POST",
      body: fd,
    });

    if (res.ok) {
      navigate("/profile");
    }
  } catch (error) {
    console.error("POST error:", error);
  }
};



  return (
    <>
    <div className="flex lg:flex-row flex-col">
        <Sidenav />
    </div>
    <UserPanel />
    <div className="min-h-screen max-w-[70%] sm:max-w-[50%] md:max-w-[65%] lg:max-w-[65%] py-8 flex items-center justify-center">
      <div className="max-w-5xl w-full h-[100%] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
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
                          <div className="text-4xl mb-3">📸</div>
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
                    <button className="absolute bottom-4 right-4 p-3 rounded-2xl shadow-lg transition duration-200 transform hover:scale-110" 
                            style={{ backgroundColor: 'var(--color-vanilla)' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-darkervanilla)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vanilla)'}>
                      <div className="text-lg">📷</div>
                    </button>
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
                    <div className="text-2xl mr-3">💡</div>
                    Event Tips
                  </h3>
                  <ul className="space-y-3" style={{ color: 'var(--color-moonstone)' }}>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <span className="text-xl mr-3" style={{ color: 'var(--color-darkervanilla)' }}>✨</span>
                      <span>Add clear, high-quality images</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <span className="text-xl mr-3" style={{ color: 'var(--color-darkervanilla)' }}>📝</span>
                      <span>Write detailed descriptions</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <span className="text-xl mr-3" style={{ color: 'var(--color-darkervanilla)' }}>💰</span>
                      <span>Set realistic pricing</span>
                    </li>
                    <li className="flex items-start p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bluewhite)' }}>
                      <span className="text-xl mr-3" style={{ color: 'var(--color-darkervanilla)' }}>🏷️</span>
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
                        <span className="text-2xl mr-3">🎯</span>
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
                        <span className="text-2xl mr-3">📄</span>
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
                        placeholder="Describe your event in detail... ✨"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                        <span className="text-2xl mr-3">🏷️</span>
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
                        {categories.map((c, index) => (
                            <option key={index} value={c.value}>{c.label}</option>))}
                      </select>
                    </div>
                  </div>

                  {/* Tab 2: Date & Location */}
                  <div className={`space-y-6 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Event Date with Popup Calendar */}
                      <div className="relative">
                        <label className="block font-bold text-lg mb-3 flex items-center" style={{ color: 'var(--color-moonstone)' }}>
                          <span className="text-2xl mr-3">📅</span>
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
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl"
                          >
                            📆
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
                        onClick={createAnEvent}
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