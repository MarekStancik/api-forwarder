import express from "express";
import fetch from "node-fetch";

const app = express();

// Middleware to authenticate requests
app.use((req, res, next) => {
    const sessionToken = req.headers["x-session-token"];
    const expectedToken = process.env.SESSION_TOKEN; // Define this in Vercel's environment variables

    if (sessionToken !== expectedToken) {
        return res.status(401).send("Unauthorized");
    }

    next();
});

app.get("/forward", async (req, res) => {
    try {
        const url = req.query.url; // Use req.query for query parameters
        if (!url) {
            return res.status(400).send("Missing 'url' query parameter");
        }

        console.log("fetching", url);
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

// module.exports = app;
export default app