import React, { useState, useRef, useEffect } from "react";
import Sidenav from "../features/Sidenav";
import { Link } from "react-router-dom";

type EventType = {
  id: number;
  title: string;
  description?: string;
  image?: string | null;          // matches Django's image serializer field
  [key: string]: unknown;
};

type UserReview = {
  id: number;
  stars: number;
  description: string;
  event: number;           // event id
  eventTitle: string | null;
  eventImage: string | null;
};

type UserPost = {
  id: number;
  description: string;
  createdAt: string; // ISO timestamp
};


const EventSearchResults = ({
  search,
  onSelect,
}: {
  search: string;
  onSelect: (event: EventType) => void;
}) => {
  const [results, setResults] = useState<EventType[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      if (!search.trim()) return setResults([]);

      try {
        const res = await fetch("http://127.0.0.1:8000/events/list_all");
        const events: EventType[] = await res.json();

        const filtered = events.filter((ev) =>
          ev.title.toLowerCase().includes(search.toLowerCase())
        );

        setResults(filtered);
      } catch (error) {
        console.error("Error searching events:", error);
      }
    };

    getEvents();
  }, [search]);

  if (!results.length) return null;

  return (
    <div className="bg-white border border-[#9CCED6] rounded-lg mt-2 shadow-md max-h-52 overflow-y-auto">
      {results.map((ev) => (
        <div
          key={ev.id}
          onClick={() => onSelect(ev)}
          className="px-4 py-2 hover:bg-[#ECFBFD] cursor-pointer text-[#4C9DB0]"
        >
          {ev.title}
        </div>
      ))}
    </div>
  );
};

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
  const [myPosts, setMyPosts] = useState<UserPost[]>([]);


  /* ------------------ REVIEWS ------------------ */
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSearch, setReviewSearch] = useState("");
  const [myReviews, setMyReviews] = useState<UserReview[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  

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
  { title: "Write Review" },
  { title: "Your Reviews" },
  { title: "Account Settings" },
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

    // Fetch user's reviews
const fetchReviews = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews/by_user?user=1`);
    if (!res.ok) throw new Error("Failed to fetch reviews");

    const data = await res.json();
    setMyReviews(data);
  } catch (err) {
    console.error("Error fetching reviews:", err);
  }
};

fetchReviews();

// Fetch user's posts
const fetchPosts = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts/user?user=1`);
    if (!res.ok) throw new Error("Failed to fetch posts");

    const data = await res.json();

    // sort newest → oldest
    const sorted = data.sort(
      (a: UserPost, b: UserPost) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setMyPosts(sorted);
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

fetchPosts();


    fetchUser();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  /* Saving User Data */
  const handleSaveChanges = async () => {
  try {
    const formData = new FormData();

  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("phoneNumber", phone);
  formData.append("bio", bio);
  formData.append("location", location);
  formData.append("timezone", timezone);

  // If a new profile picture was selected, append it
  if (fileInputRef.current?.files?.[0]) {
    formData.append("profilePicture", fileInputRef.current.files[0]);
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/update_user?user=1`, {
    method: "PUT",
    body: formData,
  });

  const data = await res.json();

  // Update UI
  setFirstName(data.firstName);
  setLastName(data.lastName);
  setUsername(data.username);
  setEmail(data.email);
  setPhone(data.phoneNumber);
  setTimezone(data.timezone);
  setLocation(data.location);
  setBio(data.bio);

  if (data.profilePicture) {
    setProfilePic(data.profilePicture);
  }

  // 🔥 Reload the page so all fields and selected event reset
    window.location.reload();
  
  } catch (error) {
    console.error("UPDATE FAILED:", error);
    alert("Error saving changes.");
  }
};

const handleSubmitReview = async () => {
  if (!selectedEvent) {
    alert("Please select an event first.");
    return;
  }

  if (reviewRating === 0) {
    alert("Please select a rating.");
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: 1,                      // Hardcoded for now
        event: selectedEvent.id,      // From event search
        stars: reviewRating,
        description: reviewText,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit review");
    }

    const data = await res.json();
    console.log("Review saved:", data);

    // 🔥 Reload the page so all fields and selected event reset
    window.location.reload();

  } catch (error) {
    console.error("Error submitting review:", error);
    alert("Could not submit review.");
  }
};

const handleSubmitPost = async () => {
  if (!postText.trim()) {
    alert("Post cannot be empty.");
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: 1,              // hardcoded for now
        description: postText // your textarea content
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to create post");
    }

    // 🔥 Reload the page so all fields and selected event reset
    window.location.reload();

  } catch (err) {
    console.error("Error creating post:", err);
    alert("Could not create post.");
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
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Profile Picture Column */}
          <div className="md:w-1/4 h-screen bg-gradient-to-b from-lightermoonstone to-moonstone px-8 flex flex-col items-center justify-center space-y-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img 
                  src="./bg.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-vanilla transition-all duration-300"></div>
              <button className="absolute bottom-2 right-2 bg-vanilla text-moonstone p-2 rounded-full shadow-md hover:bg-[#E9CC73] transition duration-200 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{user?.firstName || "USER"}</h3>
              <div className="flex items-center justify-center text-white">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <form className="text-sm">Rhode Island, USA</form>
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

                        {/* Post Button */}
                        <button
  className="w-full py-3 bg-[#4C9DB0] text-white rounded-lg shadow-md hover:bg-[#3a8a9d] transition"
  onClick={handleSubmitPost}
>
  Post
</button>

{/* -------------------------
    USER'S PREVIOUS POSTS
------------------------- */}
<div className="mt-6">
  <h3 className="text-xl font-semibold text-[#4C9DB0] mb-3">
    Your Previous Posts
  </h3>

  {myPosts.length === 0 ? (
    <div className="text-[#4C9DB0] opacity-60 italic">
      You haven't made any posts yet.
    </div>
  ) : (
    <div className="space-y-4">
      {myPosts.map((post) => (
        <div
          key={post.id}
          className="p-4 border border-[#9CCED6] bg-[#ECFBFD] rounded-lg shadow-sm"
        >
          <p className="text-[#4C9DB0]">{post.description}</p>

         <p className="text-sm text-[#4C9DB0]">
  Posted on {new Date(post.createdAt).toLocaleString()}
</p>


        </div>
      ))}
    </div>
  )}
</div>


                      </div>
                    )}

                {/* ------------------------------  
                      USER REVIEWS TAB  
                  ------------------------------ */}
                  {activeTab === 1 && (
  <div className="space-y-6">
{/* Search Bar */}
<div className="mb-6">
  <label className="text-[#4C9DB0] font-semibold block mb-2">
    Search Event to Review
  </label>

  <div className="relative">
    <input
      type="text"
      value={reviewSearch}
      onChange={(e) => {
        setReviewSearch(e.target.value);
        setSelectedEvent(null); // allow new searches
      }}
      disabled={selectedEvent !== null} // lock after selection
      placeholder="Start typing event name..."
      className={`w-full p-3 pl-11 border border-[#9CCED6] rounded-lg bg-[#ECFBFD]
      text-[#4C9DB0] focus:outline-none
      ${selectedEvent ? "opacity-60 cursor-not-allowed" : ""}`}
    />

    {/* Search Icon */}
    <svg
      className="w-5 h-5 text-[#4C9DB0] absolute left-3 top-1/2 -translate-y-1/2 opacity-70"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>
  </div>

    {selectedEvent && (
  <div className="mt-4 p-4 border border-[#9CCED6] bg-[#ECFBFD] rounded-lg shadow-sm">
    <h4 className="text-xl font-bold text-[#4C9DB0]">
      Reviewing: {selectedEvent.title}
    </h4>

    {/* Event Image */}
{typeof selectedEvent.imageUrl === "string" && selectedEvent.imageUrl && (
  <div className="w-full flex justify-center mt-3">
    <img
      src={selectedEvent.imageUrl}
      alt="Event"
      className="h-32 w-auto rounded-lg shadow-md object-cover"
    />
  </div>
)}

    {/* Event Description */}
    {typeof selectedEvent.description === "string" && selectedEvent.description && (
      <p className="text-[#4C9DB0] mt-3">Description: {selectedEvent.description}</p>
    )}
  </div>
)}

  {/* 🔎 Search dropdown (hidden if event selected) */}
  {!selectedEvent && (
    <EventSearchResults search={reviewSearch} onSelect={setSelectedEvent} />
  )}
</div>


    {/* -----------------------------
         STAR RATING
       ----------------------------- */}
    <div className="flex flex-col mb-4">
      <span className="text-[#4C9DB0] font-semibold mb-2">
        Your Rating:
      </span>

      <div className="flex space-x-3">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoverRating || reviewRating);
          return (
            <svg
              key={star}
              onClick={() => setReviewRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className={`w-10 h-10 cursor-pointer transition-all duration-150 
                ${isFilled ? "text-[#FFEBAF]" : "text-[#9CCED6]"} 
                hover:scale-110`}
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
                1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
    </div>

    {/* -----------------------------
         REVIEW TEXT BOX
       ----------------------------- */}
    <textarea
      value={reviewText}
      onChange={(e) => setReviewText(e.target.value)}
      className="w-full h-40 p-4 border border-[#9CCED6] rounded-lg bg-[#ECFBFD] 
      text-[#4C9DB0] focus:outline-none"
      placeholder="Write your review..."
    />

    {/* -----------------------------
         SUBMIT REVIEW BUTTON
       ----------------------------- */}
    <button
  className="w-full py-3 bg-[#4C9DB0] text-white rounded-lg shadow-md hover:bg-[#3a8a9d] transition"
  onClick={handleSubmitReview}
>
  Submit Review
</button>

  </div>
)}

{/* ------------------------------
     YOUR REVIEWS TAB
------------------------------ */}
{activeTab === 2 && (
  <div className="space-y-6">

    <h3 className="text-xl font-semibold text-[#4C9DB0] mb-3">
      Your Reviews
    </h3>

    {myReviews.length === 0 ? (
      <div className="text-[#4C9DB0] opacity-60 italic">
        You haven't written any reviews yet.
      </div>
    ) : (
      <div className="space-y-4">
        {myReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-4 border border-[#9CCED6] bg-[#ECFBFD] rounded-lg shadow-sm"
          >
            <h4 className="text-lg font-semibold text-[#4C9DB0]">
              Event Title: {rev.eventTitle || "Event"}
            </h4>

          {/* Star Rating */}
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className={`w-5 h-5 ${
                    s <= rev.stars ? "text-[#FFEBAF]" : "text-[#9CCED6]"
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
1 0 00.951-.69l1.07-3.292z" />

                </svg>
              ))}
            </div>

            {rev.eventImage && (
  <img
    src={`${import.meta.env.VITE_BASE_URL}${rev.eventImage}`}
    alt="Event"
    className="mt-2 w-40 h-24 object-cover rounded-md shadow"
  />
)}

            <p className="text-[#4C9DB0] mt-2">Review: {rev.description}</p>
          </div>
        ))}
      </div>
    )}

  </div>
)}


                      { /* ------------------------------
                        ACCOUNT SETTINGS TAB
                    ------------------------------ */}
                    {activeTab === 3 && (
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
                          onClick={handleSaveChanges}
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
