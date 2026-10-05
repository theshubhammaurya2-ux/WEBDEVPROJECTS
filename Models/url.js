import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortcode: {
        type: String,
        required: true,
        unique: true
    },

    longurl: {
        type: String,
        required: true
    }
});

export const Url = mongoose.model("shorturl", urlSchema);
