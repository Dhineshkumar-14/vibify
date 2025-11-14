import express from "express";
import dotenv from "dotenv";
import albumRoutes from "./routes/album.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import userRoutes from "./routes/user.route.js";
import statRoutes from "./routes/stat.route.js";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();
const app = express();
app.use(express.json());
app.use(clerkMiddleware());
const PORT = process.env.PORT;

app.use("/api/albums", albumRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Sever is running on http://localhost:" + PORT);
});
