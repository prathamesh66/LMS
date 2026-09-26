import uploadOnCloudinary from "../configs/cloudinary.js";
import User from "../models/userModel.js";

const BACKEND_URL = "https://lms-wmy8.onrender.com";

// Convert old localhost media URLs to Render URL
const normalizeMediaUrl = (url) => {
  if (!url) return url;

  return url
    .replace("http://localhost:8000", BACKEND_URL)
    .replace("https://localhost:8000", BACKEND_URL);
};

// Get Current User
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .populate("enrolledCourses");

    if (!user) {
      return res.status(400).json({
        message: "user does not found",
      });
    }

    const userData = user.toObject();

    // Fix old localhost profile image URL
    userData.photoUrl = normalizeMediaUrl(userData.photoUrl);

    return res.status(200).json(userData);
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      message: "get current user error",
    });
  }
};

// Update Profile
export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, description } = req.body;

    const updateData = {
      name,
      description,
    };

    // If a new profile image is selected
    if (req.file) {
      updateData.photoUrl = `${BACKEND_URL}/uploads/${req.file.filename}`;

      console.log("Profile image saved:", updateData.photoUrl);
    }

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userData = user.toObject();

    // Fix old localhost profile image URL
    userData.photoUrl = normalizeMediaUrl(userData.photoUrl);

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Update Profile Error:", error);

    return res.status(500).json({
      message: `Update Profile Error: ${error.message}`,
    });
  }
};

