import express from 'express';
import Login from '../controller/loginController.js';
import Signup from '../controller/signupController.js';
import requireAuth from '../middleware/requireAuth.js';
// const express=require('express');
// const Login =require('../controller/loginController');
// const Signup = require('../controller/signupController');
// const requireAuth = require('../middleware/requireAuth');

const loginroute = express.Router();
// loginroute.use(requireAuth);
loginroute.post('/signup', Signup)
loginroute.post('/login', Login)
    // module.exports=loginroute

export default loginroute;