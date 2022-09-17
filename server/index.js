// import dependendencies and packages
const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
require("dotenv").config();

// initialize express
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// access to db
const db = new Client({
    connectionString: "postgresql://carl:WBFMMmhrJWAJXjAV56zA3w@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dhtn-hatch-5024",
    application_name: "$ docs_quickstart_node"
});

// fetch user
// fetch team
// merge team a/team b
// update team
// delete team
// post user?
// post team?
// update user?