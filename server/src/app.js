
import express from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "PlacementOZ API is running 🚀",
  });
});

app.use("/api/auth", authRoutes);

export default app;
