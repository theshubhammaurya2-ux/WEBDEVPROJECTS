import { Url } from "../Models/url.js";
import shortid from "shortid";

export const urlshort = async (req, res) => {
    try {
        const longurl = req.body.longurl;

        if (!longurl) {
            return res.status(400).send("URL is required");
        }

        const shortcode = shortid.generate();

        const shorturl = `${req.protocol}://${req.get("host")}/${shortcode}`;

        const newurl = new Url({
            shortcode,
            longurl
        });

        await newurl.save();

        console.log("URL shortened successfully...", newurl);

        res.render("server.ejs", {
            shorturl: shorturl
        });

    } catch (err) {
        console.error("Error shortening URL:", err);
        res.status(500).send("Something went wrong");
    }
};


export const getoriginalurl = async (req, res) => {
    try {
        const shortcode = req.params.shortcode;

        const urlrecord = await Url.findOne({
            shortcode: shortcode
        });

        if (urlrecord) {
            return res.redirect(urlrecord.longurl);
        }

        res.status(404).send("URL not found");

    } catch (err) {
        console.error("Error finding URL:", err);
        res.status(500).send("Something went wrong");
    }
};
