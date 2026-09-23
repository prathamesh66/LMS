import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary configured");

try {
  const result = await cloudinary.uploader.upload(
    "C:/Users/user/OneDrive/Desktop/LMS/backend/test-image.jpg",
    {
      resource_type: "image",
    },
  );

  console.log("UPLOAD SUCCESS:");
  console.log(result.secure_url);
} catch (error) {
  console.log("UPLOAD FAILED:");
  console.log(error);
}
