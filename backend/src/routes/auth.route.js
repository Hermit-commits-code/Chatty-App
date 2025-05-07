import { login, logout, signup } from '../controllers/auth.controller.js';

import express from 'express';

const router = express.Router();

// Signup route
router.get('/signup', signup);

// Login route
router.get('/login', login);

// Logout route
router.get('/logout', logout);

export default router;
