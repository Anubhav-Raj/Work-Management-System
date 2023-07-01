import { check } from "express-validator";
import Express from "express";
import { signUp, signIn } from "../controllers/auth.js";

const router = Express.Router();

router.post(
  "/sign-up",
  [
    check("name", "Name is required").trim(),
    check("email", "Email is required").trim().isEmail().normalizeEmail(),
    check("phone", "phone no is required").trim(),
    check("password", "Password should be at least 3 chars").isLength({
      min: 3,
    }),
  ],

  signUp
);

router.post(
  "/sign-in",
  [
    check("email", "Email is required").trim().isEmail(),
    check("password", "Password field is required").isLength({
      min: 3,
    }),
  ],
  signIn
);

export default router;
