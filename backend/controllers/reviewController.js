
import Review from "../models/reviewModel.js";
import Course from "../models/courseModel.js";

const BACKEND_URL = "https://lms-wmy8.onrender.com";

// Convert old localhost media URLs to Render URL
const normalizeMediaUrl = (url) => {
  if (!url) return url;

  return url
    .replace("http://localhost:8000", BACKEND_URL)
    .replace("https://localhost:8000", BACKEND_URL);
};

// Add Review
export const addReview = async (req, res) => {
  try {
    const { rating, comment, courseId } = req.body;
    const userId = req.userId;

    // Check if course exists
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Prevent duplicate review by same user
    const alreadyReviewed = await Review.findOne({
      course: courseId,
      user: userId,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You have already reviewed this course",
      });
    }

    const review = new Review({
      course: courseId,
      user: userId,
      rating,
      comment,
    });

    await review.save();

    course.reviews.push(review._id);
    await course.save();

    return res.status(201).json(review);
  } catch (error) {
    console.error("Add Review Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

// Get Course Reviews
export const getCourseReviews = async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await Review.find({
      course: courseId,
    }).populate("user", "name photoUrl role");

    const updatedReviews = reviews.map((review) => {
      const reviewData = review.toObject();

      if (reviewData.user) {
        reviewData.user.photoUrl = normalizeMediaUrl(
          reviewData.user.photoUrl
        );
      }

      return reviewData;
    });

    return res.status(200).json(updatedReviews);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching reviews",
    });
  }
};

// Get All Reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate("user", "name photoUrl role")
      .sort({ reviewedAt: -1 });

    const updatedReviews = reviews.map((review) => {
      const reviewData = review.toObject();

      if (reviewData.user) {
        reviewData.user.photoUrl = normalizeMediaUrl(
          reviewData.user.photoUrl
        );
      }

      return reviewData;
    });

    return res.status(200).json(updatedReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);

    return res.status(500).json({
      message: "Failed to fetch reviews",
    });
  }
};

