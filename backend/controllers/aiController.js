import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import Course from "../models/courseModel.js";

dotenv.config();

export const searchWithAi = async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are an intelligent assistant for an LMS platform.

The user will tell you what they want to learn.

Return ONLY ONE category or level from this list:

App Development
AI/ML
AI Tools
Data Science
Data Analytics
Ethical Hacking
UI UX Designing
Web Development
Others
Beginner
Intermediate
Advanced

Do not explain anything.
Do not add punctuation.
Return only the exact category or level.

User query: ${input}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const keyword = response.text.trim();

    console.log("User Input:", input);
    console.log("AI Keyword:", keyword);

    // First search using user's actual input
    let courses = await Course.find({
      isPublished: true,
      $or: [
        { title: { $regex: input, $options: "i" } },
        { subTitle: { $regex: input, $options: "i" } },
        { description: { $regex: input, $options: "i" } },
        { category: { $regex: input, $options: "i" } },
        { level: { $regex: input, $options: "i" } },
      ],
    });

    // If nothing found, search using AI keyword
    if (courses.length === 0) {
      courses = await Course.find({
        isPublished: true,
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { subTitle: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
          { category: { $regex: keyword, $options: "i" } },
          { level: { $regex: keyword, $options: "i" } },
        ],
      });
    }

    return res.status(200).json(courses);
  } catch (error) {
    console.error("AI Search Error:", error);

    return res.status(500).json({
      message: "AI search failed",
      error: error.message,
    });
  }
};
