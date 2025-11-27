import React, { useState, useRef } from "react";
import Sidenav from "../features/Sidenav";
import useUserStore from "../lib/userStore";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useUserStore();
  const [activeTab, setActiveTab] = useState(0);

  /* ------------------ PROFILE PHOTO ------------------ */
  const [profilePic, setProfilePic] = useState("./bg.jpg");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const triggerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files && files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  /* ------------------ LEFT PANEL EDITABLE FIELDS ------------------ */
  const [phone, setPhone] = useState("+4013321145");
  const [email, setEmail] = useState(user?.email || "user123@email.com");
  const [bio, setBio] = useState("Insert bio here.");

  /* ------------------ POSTS ------------------ */
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState<string | null>(null);

  /* ------------------ REVIEWS ------------------ */
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewImage, setReviewImage] = useState<string | null>(null);

  /* ------------------ ACCOUNT SETTINGS ------------------ */
  const [username, setUsername] = useState(user?.email || "");
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [password, setPassword] = useState("");
  const [timezone, setTimezone] = useState("");

  /* ------------------ CHAT ------------------ */
  const [chatOpen, setChatOpen] = useState(false);
  const chatInputRef = useRef<HTMLInputElement | null>(null);
  const openChat = () => {
    setChatOpen(true);
    setTimeout(() => chatInputRef.current?.focus(), 200);
  };

  /* ------------------ NOTIFICATIONS ------------------ */
  const [notifOpen, setNotifOpen] = useState(false);

  const tabs = [
    { title: "Your Posts" },
    { title: "User Reviews" },
    { title: "Account Setting" },
  ];

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <Sidenav />
      </div>

      <div className="h-screen py-8 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full h-[100%] bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* -----------------------------------------------------
                LEFT PANEL
            ----------------------------------------------------- */}
            <div className="md:w-1/4 h-screen bg-gradient-to-b from-lightermoonstone to-moonstone px-8 flex flex-col items-center justify-center space-y-6">

              {/* Profile Picture */}
              <div
                className="relative group cursor-pointer"
                onClick={triggerUpload}
              >
                <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Camera Icon */}
                <div className="absolute bottom-2 right-2 bg-[#FFEBAF] text-[#4C9DB0] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#E9CC73] transition-colors border-2 border-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.2C13.767 15.2 15.2 13.767 15.2 12C15.2 10.233 13.767 8.8 12 8.8C10.233 8.8 8.8 10.233 8.8 12C8.8 13.767 10.233 15.2 12 15.2ZM12 14C10.895 14 10 13.105 10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14Z" />
                    <path d="M20 7H16.828L15.414 5.586C15.149 5.321 14.789 5.2 14.414 5.2H9.586C9.211 5.2 8.851 5.321 8.586 5.586L7.172 7H4C2.895 7 2 7.895 2 9V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V9C22 7.895 21.105 7 20 7ZM20 18H4V9H7.414L8.828 7.414C8.893 7.349 8.995 7.3 9.086 7.3H14.914C15.005 7.3 15.107 7.349 15.172 7.414L16.586 9H20V18Z" />
                  </svg>
                </div>

                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                />
              </div>

              {/* Profile Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {user?.firstName || "USER"}
                </h3>

                <div className="flex items-center justify-center text-[#ECFBFD]">
                  {/* CUTE PASTEL PIN */}
                  <svg
                    className="w-5 h-5 text-[#FFEBAF] mr-2 drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" />
                  </svg>

                  <span className="text-sm">Rhode Island, USA</span>
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 w-full mb-10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-1">4.5</h3>

                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-[#FFEBAF]" : "text-white/50"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 
                          3.292a1 1 0 00.95.69h3.462c.969 0 
                          1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                          00-.364 1.118l1.07 3.292c.3.921-.755 
                          1.688-1.54 1.118l-2.8-2.034a1 1 0 
                          00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                          1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                          1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <span className="text-[#ECFBFD] text-sm">123 reviews</span>
                </div>
              </div>

              {/* Chat + Create Buttons */}
              <div className="profile-btn flex flex-col items-center justify-center space-y-4 mt-4">
                <button
                  onClick={openChat}
                  className="w-40 flex items-center justify-center px-5 py-3 bg-[#4C9DB0] text-white rounded-lg hover:bg-[#3a8a9d] shadow-md"
                >
                  Chat
                </button>

                <Link
                  to="/create-event"
                  className="w-40 flex items-center justify-center px-5 py-3 bg-[#FFEBAF] text-[#4C9DB0] rounded-lg hover:bg-[#E9CC73] shadow-md"
                >
                  Create
                </Link>
              </div>
            </div>

            {/* -----------------------------------------------------
                RIGHT PANEL
            ----------------------------------------------------- */}
            <div className="md:w-3/4">

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#9CCED6] bg-gradient-to-r from-white to-lightermoonstone">
                <div>
                  <h3 className="text-2xl font-bold text-moonstone">
                    Welcome Back!
                  </h3>
                  <p className="text-moonstone">Manage your profile and content</p>
                </div>

                <div className="relative">
                  <div
                    onClick={() => setNotifOpen(true)}
                    className="bg-[#FFEBAF] p-3 rounded-full shadow-md hover:bg-[#E9CC73] cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-[#4C9DB0]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>

                    <span className="absolute -top-1 -right-1 bg-[#4C9DB0] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row">

                {/* LEFT INFO PANEL (EDITABLE FIELDS) */}
                <div className="md:w-1/3 p-6 border-r border-[#9CCED6] bg-[#ECFBFD]/30">
                  <div className="space-y-6">

                    {/* Editable Phone */}
                    <div className="flex items-center text-[#4C9DB0] p-3 bg-white rounded-lg shadow-sm">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent outline-none text-[#4C9DB0] font-medium"
                      />
                    </div>

                    {/* Editable Email */}
                    <div className="flex items-center text-[#4C9DB0] p-3 bg-white rounded-lg shadow-sm">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent outline-none text-[#4C9DB0] font-medium"
                      />
                    </div>

                    {/* Editable Bio */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="text-lg font-semibold text-[#4C9DB0] mb-3">
                        Bio
                      </h3>

                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full h-24 p-2 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0] outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* -------------------- TABS CONTENT -------------------- */}
                <div className="md:w-2/3">

                  {/* TAB NAVIGATION */}
                  <div className="nav border-b border-[#9CCED6] bg-gradient-to-r from-[#ECFBFD] to-white">
                    <ul className="flex">
                      {tabs.map((tab, index) => (
                        <li
                          key={index}
                          onClick={() => setActiveTab(index)}
                          className={`px-6 py-4 cursor-pointer transition duration-200 ${
                            activeTab === index
                              ? "border-b-2 border-[#4C9DB0] text-[#4C9DB0] font-bold bg-white"
                              : "text-[#9CCED6] hover:text-[#4C9DB0]"
                          }`}
                        >
                          {tab.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="profile-body p-6 bg-white">
                    {/* ------------------------------
                        YOUR POSTS TAB
                    ------------------------------ */}
                    {activeTab === 0 && (
                      <div className="space-y-6">

                        <textarea
                          value={postText}
                          onChange={(e) => setPostText(e.target.value)}
                          className="w-full h-40 p-4 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] 
                          text-[#4C9DB0] focus:outline-none"
                          placeholder="Write your post..."
                        />

                        {/* Post Photo */}
                        <div>
                          <label className="block mb-2 text-[#4C9DB0] font-semibold">
                            Upload a photo
                          </label>

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) setPostImage(URL.createObjectURL(file));
                            }}
                            className="block w-full text-sm text-[#4C9DB0]
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:bg-[#ECFBFD] file:text-[#4C9DB0]
                            hover:file:bg-[#d7f3f7] cursor-pointer"
                          />

                          {postImage && (
                            <img
                              src={postImage}
                              className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md border border-[#9CCED6]"
                            />
                          )}
                        </div>

                        {/* Post Button */}
                        <button
                          className="w-full py-3 bg-[#4C9DB0] text-white rounded-lg shadow-md hover:bg-[#3a8a9d] transition"
                          onClick={() => alert("Post submitted!")}
                        >
                          Post
                        </button>
                      </div>
                    )}

                    {/* ------------------------------
                        USER REVIEWS TAB
                    ------------------------------ */}
                    {activeTab === 1 && (
                      <div className="space-y-6">

                        {/* Star Rating */}
                        <div className="flex items-center mb-2">
                          <span className="mr-3 text-[#4C9DB0] font-semibold">
                            Your Rating:
                          </span>

                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                onClick={() => setReviewRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className={`w-7 h-7 cursor-pointer transition-transform duration-150 
                                  ${
                                    star <= (hoverRating || reviewRating)
                                      ? "text-[#FFEBAF]"
                                      : "text-[#9CCED6]"
                                  } hover:scale-110`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921..." />
                              </svg>
                            ))}
                          </div>
                        </div>

                        {/* Review Text */}
                        <textarea
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          className="w-full h-40 p-4 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] 
                          text-[#4C9DB0] focus:outline-none"
                          placeholder="Write your review..."
                        />

                        {/* Review Photo */}
                        <div>
                          <label className="block mb-2 text-[#4C9DB0] font-semibold">
                            Upload a photo for your review
                          </label>

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) setReviewImage(URL.createObjectURL(file));
                            }}
                            className="block w-full text-sm text-[#4C9DB0]
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:bg-[#ECFBFD] file:text-[#4C9DB0]
                            hover:file:bg-[#d7f3f7] cursor-pointer"
                          />

                          {reviewImage && (
                            <img
                              src={reviewImage}
                              className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md border border-[#9CCED6]"
                            />
                          )}
                        </div>

                        {/* Post Review Button */}
                        <button
                          className="w-full py-3 bg-[#4C9DB0] text-white rounded-lg shadow-md hover:bg-[#3a8a9d] transition"
                          onClick={() => alert("Review submitted!")}
                        >
                          Post Review
                        </button>
                      </div>
                    )}

                    {/* ------------------------------
                        ACCOUNT SETTINGS TAB
                    ------------------------------ */}
                    {activeTab === 2 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />

                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="New Password"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />

                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />

                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                        </div>

                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                        >
                          <option value="">Select Timezone</option>
                          <option value="EST">EST</option>
                          <option value="CST">CST</option>
                          <option value="MST">MST</option>
                          <option value="PST">PST</option>
                        </select>

                        <button
                          className="w-full py-3 bg-[#4C9DB0] text-white rounded-lg shadow-md hover:bg-[#3a8a9d] transition"
                          onClick={() => alert("Settings Saved!")}
                        >
                          Save Changes
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT POPUP */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-2xl p-4 z-50 border border-[#9CCED6]">

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#4C9DB0] text-center flex-1">Chat</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-red-500 text-xl font-bold hover:text-red-700"
            >
              ×
            </button>
          </div>

          <div className="h-48 overflow-y-auto p-3 space-y-3">
            <div className="flex justify-start">
              <div className="bg-[#ECFBFD] rounded-2xl px-4 py-2 max-w-[80%]">
                <p className="text-[#4C9DB0] text-sm">Hello! How can I help you today?</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#4C9DB0] rounded-2xl px-4 py-2 max-w-[80%]">
                <p className="text-white text-sm">I need help with my profile</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-[#ECFBFD] rounded-2xl px-4 py-2 max-w-[80%]">
                <p className="text-[#4C9DB0] text-sm">Sure! What do you need help with?</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center mt-4 space-x-2">
            <div className="flex-1 border border-[#9CCED6] rounded-full p-2">
              <input
                ref={chatInputRef}
                type="text"
                placeholder="Type a message..."
                className="w-full outline-none text-sm px-2 bg-transparent"
              />
            </div>
            <button className="bg-[#4C9DB0] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#3a8a9d] transition-colors">
              <svg className="w-5 h-5" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* NOTIFICATION PANEL */}
      {notifOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#4C9DB0]">Notifications</h2>
            <button
              onClick={() => setNotifOpen(false)}
              className="text-red-500 text-xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 text-[#4C9DB0]">
            <p className="p-3 bg-[#ECFBFD] rounded-lg">New message received!</p>
            <p className="p-3 bg-[#ECFBFD] rounded-lg">Your event was approved.</p>
            <p className="p-3 bg-[#ECFBFD] rounded-lg">You have a new follower.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
