// import express from "express";
// import dotenv from "dotenv";
// import connectDb from "./configs/db.js";
// import authRouter from "./routes/authRoute.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import userRouter from "./routes/userRoute.js";
// import courseRouter from "./routes/courseRoute.js";
// import paymentRouter from "./routes/paymentRoute.js";
// import aiRouter from "./routes/aiRoute.js";
// import reviewRouter from "./routes/reviewRoute.js";
// dotenv.config();

// const port = process.env.PORT || 8000;
// let app = express();
// app.use(express.json());
// app.use("/uploads", express.static("public/uploads"));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   }),
// );
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/course", courseRouter);
// app.use("/api/payment", paymentRouter);
// app.use("/api/ai", aiRouter);
// app.use("/api/review", reviewRouter);

// app.get("/", (req, res) => {
//   res.send("Hello From Server");
// });

// // app.listen(port, () => {
// //   console.log("Server Started");
// //   connectDb()
// //     .then(() => {
// //       app.listen(port, () => {
// //         console.log("Server Started");
// //       });
// //     })
// //     .catch((error) => {
// //       console.log("Database connection failed:", error);
// //     });
// // });

// const startServer = async () => {
//   try {
//     await connectDb();

//     app.listen(port, () => {
//       console.log(`Server Started on port ${port}`);
//     });
//   } catch (error) {
//     console.log("Server not started because MongoDB connection failed.");
//   }
// };

// startServer();

import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import courseRouter from "./routes/courseRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import aiRouter from "./routes/aiRoute.js";
import reviewRouter from "./routes/reviewRoute.js";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/uploads", express.static("public/uploads"));

app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/ai", aiRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

const startServer = async () => {
  try {
    await connectDb();

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server Started on port ${port}`);
    });
  } catch (error) {
    console.log("Server not started because MongoDB connection failed.");
  }
};

startServer();