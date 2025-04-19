const express = require("express");
const app = express();  

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());


const blogs = require("./routes/blog");

app.use("/api/v1", blogs);

const connectwithDB = require("./config/database");

connectwithDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {   
    res.send(`<h1>"API is running"</h1>`);
});
