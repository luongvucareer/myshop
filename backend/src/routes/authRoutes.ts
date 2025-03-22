import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { generateAccessToken } from "../utils/generateToken";

const router = express.Router();

// @desc    Refresh Access Token
// @route   POST /api/auth/refresh-token
// @access  Public
router.post("/refresh-token", async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token provided" });
  }

  try {
    // Giải mã Refresh Token
    const decoded: any = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET as string
    );

    // Kiểm tra xem user có tồn tại không
    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    // Cấp lại Access Token mới
    const newAccessToken = generateAccessToken(user._id.toString());
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired refresh token" });
  }
});

export default router;
