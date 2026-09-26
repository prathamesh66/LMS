import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";

function ReviewPage() {
  const [latestReview, setLatestReview] = useState([]);

  const { allReview } = useSelector((state) => state.review);

  const BACKEND_URL = "https://lms-wmy8.onrender.com";

  useEffect(() => {
    setLatestReview(allReview?.slice(0, 6) || []);
  }, [allReview]);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-[20px]">
        Real Reviews from Real Learners
      </h1>

      <span className="lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] mb-[30px] px-[20px]">
        Discover how our Virtual Courses is transforming learning experiences
        through real feedback from students and professionals worldwide.
      </span>

      <div className="w-full flex items-center justify-center flex-wrap gap-[50px] lg:p-[50px] md:p-[30px] p-[10px] mb-[40px]">
        {latestReview.length > 0 ? (
          latestReview.map((item, index) => {
            const photoUrl = item?.user?.photoUrl;

            const image = photoUrl
              ? photoUrl.startsWith("http")
                ? photoUrl
                : `${BACKEND_URL}/uploads/${photoUrl}`
              : "/default-avatar.png";

            return (
              <ReviewCard
                key={item?._id || index}
                rating={item?.rating || 0}
                image={image}
                text={item?.comment || ""}
                name={item?.user?.name || "User"}
                role={item?.user?.role || "Student"}
              />
            );
          })
        ) : (
          <p className="text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewPage;
