const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require("./db/config");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/user", require("./route/userRoutes"));

app.listen(port, () => {
    console.log(`This application is running on ${ port }`);
});