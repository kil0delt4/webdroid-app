import Project from '../models/productModel.js';
// const Project=require('../models/productModel')

const projectForm = (req, res) => {
        const form = req.body;
        console.log(form);
        res.send(form);
        Project.create(form);
    }
    // module.exports=projectForm;
export default projectForm;