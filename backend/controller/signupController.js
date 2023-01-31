import dotenv from 'dotenv';
dotenv.config();
import User from '../models/userModel.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// require('dotenv').config()
// const User = require("../models/userModel");
// const validator = require('validator')
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.KEY, { expiresIn: '3d' })
}
const signup = async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //   console.log(email);
    const exist = await User.findOne({ email: email });
    try {
        if (!validator.isEmail(email)) {
            throw Error("Invalid email format.");
        }
        if (!validator.isLength(password, { min: 6 })) {
            throw Error("Password must be at least 6 characters long.");
        }
        if (exist) {
            throw Error("Email already in use");
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.create({ email, password: hash });
        const token = createToken(user._id)
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// module.exports=signup;
export default signup;