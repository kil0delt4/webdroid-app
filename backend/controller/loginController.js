import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import validator from 'validator';

// const jwt=require('jsonwebtoken')
// const bcrypt = require("bcrypt");
// const User = require("../models/userModel");
// const validator = require('validator')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.KEY, { expiresIn: '3d' })
}
const Login = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(email, password);

    //   console.log(user.email, user.password);
    try {
        if (!user) {
            throw Error("NO user with email id:" + email + " exist");
        }
        const match = await bcrypt.compareSync(password, user.password);
        console.log(match);
        const authority = user.authority;
        if (!match) {
            throw Error("Incorrect Password");
        }
        const token = createToken(user._id);
        res.status(200).json({ email, authority, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
// module.exports=Login;
export default Login;