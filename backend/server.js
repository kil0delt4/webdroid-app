import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import loginRoutes from './routes/loginRoute.js';
import projectRoutes from './routes/projectRoute.js';
import cors from 'cors';
// require('dotenv').config();
// const express=require("express");
// const mongoose=require("mongoose");
// const loginRoutes=require('./routes/loginRoute')
// const projectRoutes = require('./routes/projectRoute')
// var cors = require('cors');

app.use(express.json());

app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use('/api', loginRoutes)
app.use('/api/project', projectRoutes)
mongoose.connect(process.env.MONGO_URL).then(() =>
    app.listen(process.env.PORT, () => {
        console.log("running on port", process.env.PORT, 'and connected to database');
    })
).catch((error) => {
    console.log(error);
})