import React, { useState, useRef, useEffect } from "react";
import Sidenav from "../features/Sidenav";
import { Link } from "react-router-dom";

const ProfilePage = () => {

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

  /* ------------------ POSTS ------------------ */
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState<string | null>(null);

  /* ------------------ REVIEWS ------------------ */
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewImage, setReviewImage] = useState<string | null>(null);


  /* ---------------- ACCOUNT FIELDS ---------------- */
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [timezone, setTimezone] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [password, setPassword] = useState("");

  const tabs = [
    { title: "Your Posts" },
    { title: "User Reviews" },
    { title: "Account Setting" },
  ];

  /* -------------------------------------------------------
     FETCH USER DATA ON LOAD
  ---------------------------------------------------------*/

    /* ---------------- FETCHED USER DATA ---------------- */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //part to change when there are user login logic
        const res = await fetch(
          "http://127.0.0.1:8000/users/user_details?user=1"
        );
        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();

        // Populate fields
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setUsername(data.username || "");
        setEmail(data.email || "");
        setPhone(data.phoneNumber || "");
        setTimezone(data.timezone || "");
        setLocation(data.location || "");
        setBio(data.bio || "");
        if (data.profilePicture) setProfilePic(data.profilePicture);

        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err) || "Error loading user");
        }
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <Sidenav />
      </div>

      <div className="h-screen py-8 w-full">
        <div className="max-w-7xl w-full h-[100%] bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* -----------------------------------------------------
                LEFT PANEL
            ----------------------------------------------------- */}
            <div className="md:w-1/3 h-screen bg-gradient-to-b from-lightermoonstone to-moonstone px-8 flex flex-col items-center justify-center space-y-6">

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
                  {firstName || "USER"}
                </h3>

                {/*
                <div className="flex items-center justify-center text-[#ECFBFD]">
                  <svg
                    className="w-5 h-5 text-[#FFEBAF] mr-2 drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" />
                  </svg>

                  <span className="text-sm">Rhode Island, USA</span>
                </div>*/}
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

              {/*Chat + Create Buttons */}
              <div className="profile-btn flex flex-col items-center justify-center space-y-4 mt-4">
                {/* Chat removed (commented out) */}

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
            <div className="md:w-2/3">

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#9CCED6] bg-gradient-to-r from-white to-lightermoonstone">
                <div>
                  <h3 className="text-2xl font-bold text-moonstone">
                    Welcome Back!
                  </h3>
                  <p className="text-moonstone">Manage your profile and content</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row">

                {/* LEFT INFO PANEL REMOVED — now empty placeholder */}
                {/*<div className="md:w-1/3 p-6 border-r border-[#9CCED6] bg-[#ECFBFD]/30">
                  <div className="space-y-6">
                    <p className="text-[#4C9DB0] opacity-60 text-sm italic">
                    </p>
                  </div>
                </div>*/}

                {/* -------------------- TABS CONTENT -------------------- */}
                <div className="md:w-full">

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

                  <div className="profile-body p-6 bg-white max-h-[75vh] overflow-y-auto">

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
                      <div className="space-y-6">

                        {/* Phone */}
                        <div>
                          <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Email Address
                          </label>
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                        </div>

                        {/* Bio */}
                        <div>
                          <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Bio
                          </label>
                          <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full h-24 p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0] resize-none"
                          ></textarea>
                        </div>

                        {/* ⭐ LOCATION — ADDED HERE ⭐ */}
                        <div>
                          <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City, State or City, Country"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                        </div>

                        {/* User fields */}
                        <div>
                            <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Username
                          </label>
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                          </div>

                          <div>
                            <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Firstname
                          </label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                          </div>

                          <div>
                            <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Lastname
                          </label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full p-3 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] text-[#4C9DB0]"
                          />
                        </div>

                        {/* Timezone */}
                        <label className="text-[#4C9DB0] font-semibold block mb-1">
                            Timezone
                          </label>
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
    </>
  );
};

export default ProfilePage;
