import mongoose from 'mongoose';
import Project from '../models/productModel.js';

// const mongoose=require("mongoose");
// const Project=require('../models/productModel');
const showProject = async(req, res) => {
        try {
            const products = await Project.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // module.exports=showProject;
export default showProject;