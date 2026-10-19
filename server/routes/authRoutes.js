
import { Router } from "express";
import {
  register,
  login,
  getMe,
} from "../controllers/authController.js";
import {
  authenticateToken,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

// Any authenticated account can retrieve its own profile.
router.get("/me", authenticateToken, getMe);

// Example of a student-only API endpoint.
router.get(
  "/student",
  authenticateToken,
  authorizeRoles("Student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Student access granted.",
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    });
  }
);

export default router;
