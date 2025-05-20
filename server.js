import dotenv from "dotenv";
dotenv.config();
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
// const express = require("express");
// const fetch = require("node-fetch");
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from your frontend domain
app.use(cors());


// const NEWS_API_KEY = "81f5e798d3434c3c9544f4ef37cbcbad";
// this is when running locally where api key is hardcoded
const api_key = process.env.NEWS_API_KEY;
// this is when hosted where api key is stored in env file in Render's system setting

// Proxy endpoint
app.get("/news", async (req, res) => {
    const { country = "us", category = "general", page = 1, pageSize = 9 } = req.query;

    // console.log(api_key);

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${api_key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from NewsAPI" });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
