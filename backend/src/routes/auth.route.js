import { login, logout, signup } from '../controllers/auth.controller.js';

import express from 'express';

const router = express.Router();
export default router;

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);
