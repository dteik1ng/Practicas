import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/register', validatorSchema(registerSchema), register);
router.post('/login', validatorSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/verify', verifyToken);
router.get('/profile', requiredAuth, profile);

export default router;