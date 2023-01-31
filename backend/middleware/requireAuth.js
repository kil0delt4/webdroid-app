import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();
// const jwt=require("jsonwebtoken");
// const User = require("../models/userModel");
// require('dotenv').config();
const requireAuth = async(req, res, next) => {
        const { authorization } = req.headers
        if (!authorization) {
            console.log('unauthorized user');
            return res.status(401).json({ error: 'no token found' });
        }
        try {
            const token = authorization.split(' ')[1];
            const { _id } = jwt.verify(token, process.env.KEY);
            const user = await User.findById(_id);
            // if(!user)throw Error('unauthorized user ');
            console.log(user);
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Request is not authorized' });
        }
    }
    // module.exports=requireAuth;
export default requireAuth;