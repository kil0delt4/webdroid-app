import mongoose from 'mongoose';
// const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        authority: {
            type: String,
            default: 'normaluser'
        }

    })
    // module.exports=mongoose.model('User',userSchema);
export default mongoose.model('User', userSchema);