import uploadOnCloudinary from "../configs/cloudinary.js";
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .populate("enrolledCourses");
    if (!user) {
      return res.status(400).json({ message: "user does not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "get current user error" });
  }
};



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
      updateData.photoUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Update Profile Error:", error);

    return res.status(500).json({
      message: `Update Profile Error: ${error.message}`,
    });
  }
};