import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = (await User.findOne({ email })) as IUser;

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user._id as string);
    const refreshToken = generateRefreshToken(user._id as string);

    // Lưu refreshToken vào database (nếu cần)
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
