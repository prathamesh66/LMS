
import Course from "../models/courseModel.js";
import Lecture from "../models/lectureModel.js";
import User from "../models/userModel.js";

const BACKEND_URL = "https://lms-wmy8.onrender.com";

// Convert old localhost media URLs to Render URL
const normalizeMediaUrl = (url) => {
  if (!url) return url;

  return url
    .replace("http://localhost:8000", BACKEND_URL)
    .replace("https://localhost:8000", BACKEND_URL);
};

// create Courses
export const createCourse = async (req, res) => {
  try {
    const { title, category } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        message: "title and category is required",
      });
    }

    const course = await Course.create({
      title,
      category,
      creator: req.userId,
    });

    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({
      message: `Failed to create course ${error}`,
    });
  }
};

// Get Published Courses
export const getPublishedCourses = async (req, res) => {
  try {
    const courses = await Course.find({
      isPublished: true,
    }).populate("lectures reviews");

    if (!courses || courses.length === 0) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    const updatedCourses = courses.map((course) => {
      const courseData = course.toObject();

      // Fix course thumbnail
      courseData.thumbnail = normalizeMediaUrl(courseData.thumbnail);

      // Fix lecture video URLs
      if (Array.isArray(courseData.lectures)) {
        courseData.lectures = courseData.lectures.map((lecture) => ({
          ...lecture,
          videoUrl: normalizeMediaUrl(lecture.videoUrl),
        }));
      }

      // Fix review user photo URLs if populated
      if (Array.isArray(courseData.reviews)) {
        courseData.reviews = courseData.reviews.map((review) => {
          if (review.user && typeof review.user === "object") {
            review.user.photoUrl = normalizeMediaUrl(
              review.user.photoUrl
            );
          }

          return review;
        });
      }

      return courseData;
    });

    return res.status(200).json(updatedCourses);
  } catch (error) {
    console.error("GET PUBLISHED COURSES ERROR:", error);

    return res.status(500).json({
      message: `Failed to get All courses ${error}`,
    });
  }
};

// Get Creator Courses
export const getCreatorCourses = async (req, res) => {
  try {
    const userId = req.userId;

    const courses = await Course.find({
      creator: userId,
    });

    if (!courses || courses.length === 0) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({
      message: `Failed to get creator courses ${error}`,
    });
  }
};

// Edit Course
export const editCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const {
      title,
      subTitle,
      description,
      category,
      level,
      price,
      isPublished,
    } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Update course information
    course.title = title;
    course.subTitle = subTitle;
    course.description = description;
    course.category = category;
    course.level = level;
    course.price = price;
    course.isPublished = isPublished;

    // Update thumbnail only if a new image is selected
    if (req.file) {
      course.thumbnail = `${BACKEND_URL}/uploads/${req.file.filename}`;

      console.log("Thumbnail saved:", course.thumbnail);
    }

    await course.save();

    console.log("Course updated successfully:", course._id);

    return res.status(200).json(course);
  } catch (error) {
    console.error("EDIT COURSE ERROR:", error);

    return res.status(500).json({
      message: "Failed to update course",
      error: error.message,
    });
  }
};

// Get Course By ID
export const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Fix old localhost thumbnail URL
    const courseData = course.toObject();

    courseData.thumbnail = normalizeMediaUrl(courseData.thumbnail);

    return res.status(200).json(courseData);
  } catch (error) {
    return res.status(500).json({
      message: `Failed to get course ${error}`,
    });
  }
};

// Remove Course
export const removeCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    await course.deleteOne();

    return res.status(200).json({
      message: "Course Removed Successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: `Failed to remove course ${error}`,
    });
  }
};

// Create Lecture
export const createLecture = async (req, res) => {
  try {
    const { lectureTitle } = req.body;
    const { courseId } = req.params;

    if (!lectureTitle || !courseId) {
      return res.status(400).json({
        message: "Lecture Title required",
      });
    }

    const lecture = await Lecture.create({
      lectureTitle,
    });

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    course.lectures.push(lecture._id);

    await course.populate("lectures");
    await course.save();

    return res.status(201).json({
      lecture,
      course,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Failed to Create Lecture ${error}`,
    });
  }
};

// Get Course Lectures
export const getCourseLecture = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    await course.populate("lectures");

    const courseData = course.toObject();

    // Fix old localhost video URLs
    if (Array.isArray(courseData.lectures)) {
      courseData.lectures = courseData.lectures.map((lecture) => ({
        ...lecture,
        videoUrl: normalizeMediaUrl(lecture.videoUrl),
      }));
    }

    return res.status(200).json(courseData);
  } catch (error) {
    return res.status(500).json({
      message: `Failed to get Lectures ${error}`,
    });
  }
};

// Edit Lecture
export const editLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const { lectureTitle, isPreviewFree } = req.body;

    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({
        message: "Lecture not found",
      });
    }

    lecture.lectureTitle = lectureTitle;
    lecture.isPreviewFree = isPreviewFree;

    // Update video only if a new video is selected
    if (req.file) {
      lecture.videoUrl = `${BACKEND_URL}/uploads/${req.file.filename}`;

      console.log("Video saved:", lecture.videoUrl);
    }

    await lecture.save();

    return res.status(200).json(lecture);
  } catch (error) {
    console.error("Failed to edit lecture:", error);

    return res.status(500).json({
      message: `Failed to edit lecture: ${error.message}`,
    });
  }
};

// Remove Lecture
export const removeLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findByIdAndDelete(lectureId);

    if (!lecture) {
      return res.status(404).json({
        message: "Lecture not found",
      });
    }

    // Remove lecture from associated course
    await Course.updateOne(
      { lectures: lectureId },
      { $pull: { lectures: lectureId } }
    );

    return res.status(200).json({
      message: "Lecture Remove Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Failed to remove Lectures ${error}`,
    });
  }
};

// Get Creator Data
export const getCreatorById = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);

    res.status(500).json({
      message: "get Creator error",
    });
  }
};

