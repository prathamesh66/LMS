// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { FaPlayCircle } from 'react-icons/fa';
// import { FaArrowLeftLong } from "react-icons/fa6";

// function ViewLecture() {
//   const { courseId } = useParams();
//   const { courseData } = useSelector((state) => state.course);
//   const {userData} = useSelector((state) => state.user)
//   const selectedCourse = courseData?.find((course) => course._id === courseId);

//   const [selectedLecture, setSelectedLecture] = useState(
//     selectedCourse?.lectures?.[0] || null
//   );
//   const navigate = useNavigate()
//   const courseCreator = userData?._id === selectedCourse?.creator ? userData : null;


//   return (
//     <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
     
//       {/* Left - Video & Course Info */}
//       <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-md p-6 border border-gray-200">
//         {/* Course Details */}
//         <div className="mb-6" >
           
//           <h1 className="text-2xl font-bold flex items-center justify-start gap-[20px]  text-gray-800"><FaArrowLeftLong  className=' text-black w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate("/")}/>{selectedCourse?.title}</h1>
          
//           <div className="mt-2 flex gap-4 text-sm text-gray-500 font-medium">
//             <span>Category: {selectedCourse?.category}</span>
//             <span>Level: {selectedCourse?.level}</span>
//           </div>
//         </div>

//         {/* Video Player */}
//         <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4 border border-gray-300">
//           {selectedLecture?.videoUrl ? (
//             <video
//               src={selectedLecture.videoUrl}
//               controls
//               className="w-full h-full object-cover"
//               crossOrigin="anonymous"
//             />
//           ) : (
//             <div className="flex items-center justify-center h-full text-white">
//               Select a lecture to start watching
//             </div>
//           )}
//         </div>

//         {/* Selected Lecture Info */}
//         <div className="mt-2">
//           <h2 className="text-lg font-semibold text-gray-800">{selectedLecture?.lectureTitle}</h2>
          
//         </div>
//       </div>

//       {/* Right - All Lectures + Creator Info */}
//       <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-6 border border-gray-200 h-fit">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">All Lectures</h2>
//         <div className="flex flex-col gap-3 mb-6">
//           {selectedCourse?.lectures?.length > 0 ? (
//             selectedCourse.lectures.map((lecture, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedLecture(lecture)}
//                 className={`flex items-center justify-between p-3 rounded-lg border transition text-left ${
//                   selectedLecture?._id === lecture._id
//                     ? 'bg-gray-200 border-gray-500'
//                     : 'hover:bg-gray-50 border-gray-300'
//                 }`}
//               >
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-800">{lecture.lectureTitle}</h4>
                  
//                 </div>
//                 <FaPlayCircle className="text-black text-xl" />
//               </button>
//             ))
//           ) : (
//             <p className="text-gray-500">No lectures available.</p>
//           )}
//         </div>

//         {/* Creator Info */}
//         {courseCreator && (
//   <div className="mt-4 border-t pt-4">
//     <h3 className="text-md font-semibold text-gray-700 mb-3">Instructor</h3>
//     <div className="flex items-center gap-4">
//       <img
//         src={courseCreator.photoUrl || '/default-avatar.png'}
//         alt="Instructor"
//         className="w-14 h-14 rounded-full object-cover border"
//       />
//       <div>
//         <h4 className="text-base font-medium text-gray-800">{courseCreator.name}</h4>
//         <p className="text-sm text-gray-600">
//           {courseCreator.description || 'No bio available.'}
//         </p>
//       </div>
//     </div>
//   </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ViewLecture;




import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

function ViewLecture() {
  const { courseId } = useParams();

  const { courseData } = useSelector((state) => state.course);
  const { userData } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const BACKEND_URL = "https://lms-wmy8.onrender.com";

  const selectedCourse = courseData?.find(
    (course) => course._id === courseId
  );

  const [selectedLecture, setSelectedLecture] = useState(null);

  // Set first lecture when course data is available
  useEffect(() => {
    if (selectedCourse?.lectures?.length > 0) {
      setSelectedLecture(selectedCourse.lectures[0]);
    }
  }, [selectedCourse]);

  // Convert localhost video URL to Render URL
  const getVideoUrl = (url) => {
    if (!url) return "";

    return url
      .replace("http://localhost:8000", BACKEND_URL)
      .replace("https://localhost:8000", BACKEND_URL);
  };

  const courseCreator =
    userData?._id === selectedCourse?.creator
      ? userData
      : null;

  // Select lecture
  const handleLectureSelect = (lecture) => {
    setSelectedLecture(lecture);
  };

  const videoUrl = getVideoUrl(selectedLecture?.videoUrl);


  console.log("SELECTED LECTURE:", selectedLecture);
  console.log("VIDEO URL:", videoUrl);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
      {/* ================= LEFT SIDE ================= */}
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        {/* Course Details */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center justify-start gap-[20px] text-gray-800">
            <FaArrowLeftLong
              className="text-black w-[22px] h-[22px] cursor-pointer"
              onClick={() => navigate("/")}
            />

            {selectedCourse?.title || "Course"}
          </h1>

          <div className="mt-2 flex gap-4 text-sm text-gray-500 font-medium">
            <span>Category: {selectedCourse?.category || "N/A"}</span>

            <span>Level: {selectedCourse?.level || "N/A"}</span>
          </div>
        </div>

        {/* ================= VIDEO PLAYER ================= */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4 border border-gray-300">
          {videoUrl ? (
            <video
              key={videoUrl}
              controls
              preload="auto"
              playsInline
              className="w-full h-full object-contain"
              onLoadedMetadata={() => {
                console.log("VIDEO LOADED:", videoUrl);
              }}
              onCanPlay={() => {
                console.log("VIDEO CAN PLAY:", videoUrl);
              }}
              onError={(e) => {
                console.error("VIDEO ERROR:", e.currentTarget.error);
                console.error("VIDEO URL:", videoUrl);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              Select a lecture to start watching
            </div>
          )}
        </div>

        {/* Selected Lecture Info */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {selectedLecture?.lectureTitle || "No lecture selected"}
          </h2>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-6 border border-gray-200 h-fit">
        <h2 className="text-xl font-bold mb-4 text-gray-800">All Lectures</h2>

        {/* Lecture List */}
        <div className="flex flex-col gap-3 mb-6">
          {selectedCourse?.lectures?.length > 0 ? (
            selectedCourse.lectures.map((lecture, index) => (
              <button
                key={lecture._id || index}
                onClick={() => handleLectureSelect(lecture)}
                className={`flex items-center justify-between p-3 rounded-lg border transition text-left ${
                  selectedLecture?._id === lecture._id
                    ? "bg-gray-200 border-gray-500"
                    : "hover:bg-gray-50 border-gray-300"
                }`}
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {lecture.lectureTitle}
                  </h4>
                </div>

                <FaPlayCircle className="text-black text-xl" />
              </button>
            ))
          ) : (
            <p className="text-gray-500">No lectures available.</p>
          )}
        </div>

        {/* ================= CREATOR INFO ================= */}
        {courseCreator && (
          <div className="mt-4 border-t pt-4">
            <h3 className="text-md font-semibold text-gray-700 mb-3">
              Instructor
            </h3>

            <div className="flex items-center gap-4">
              <img
                src={courseCreator.photoUrl || "/default-avatar.png"}
                alt="Instructor"
                className="w-14 h-14 rounded-full object-cover border"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png";
                }}
              />

              <div>
                <h4 className="text-base font-medium text-gray-800">
                  {courseCreator.name}
                </h4>

                <p className="text-sm text-gray-600">
                  {courseCreator.description || "No bio available."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewLecture;

