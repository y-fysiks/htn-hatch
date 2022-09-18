// import dependendencies and packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Client } = require("pg");

// access to db
const db = new Client({
    connectionString: "postgresql://carl:WBFMMmhrJWAJXjAV56zA3w@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/hackathon?sslmode=verify-full&options=--cluster%3Dhtn-hatch-5024"
});
db.connect(err => {
    if(err) console.log(err);
    else console.log("Connected to DB");
});

// initialize express
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// fetch user
// fetch team
// merge team a/team b
// update team
// delete team
// post user?
// post team?
// update user?
const userRouter = require("./routes/user");
const teamRouter = require("./routes/team");
app.use("/user", userRouter);
app.use("/team", teamRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));