import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import { urlshort, getoriginalurl } from "../controllers/url.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Middleware
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "nodejs__express__apiseries"
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

// Home page
app.get("/", (req, res) => {
    res.render("server.ejs", {
        shorturl: null
    });
});

// Shorten URL
app.post("/shorten", urlshort);

// Redirect to original URL
app.get("/:shortcode", getoriginalurl);

export default app;
