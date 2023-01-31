import mongoose from "mongoose";

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "misc",
    },
    description: {
        type: String,
    },
    free: {
        type: Boolean,
        require: true,
    },
    price: {
        type: Number,
        default: "0",
    },
    technology: {
        type: Object,
    },
    video_link_free: {
        type: String,
    },
    //link available after purchase
    video_link_paid: {
        type: String,
    },
    synopsis_url: {
        type: String,
    },
    //available after purchase
    full_report_url: {
        type: String,
    },
    //paid user list is maitained for users who bought the course
    paid_user: {
        type: Array,
    },
});
export default mongoose.model("Project", projectSchema);