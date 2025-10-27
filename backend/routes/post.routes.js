import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getAllPost,
  getFollowingPost,
  getLikedPosts,
  getUserPost,
  createPost,
  likeUnlikePost,
  commentOnPost,
  deletePost,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/following", protectRoute, getFollowingPost);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPost);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
