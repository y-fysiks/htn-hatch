// import router db
const router = require("express").Router();
const { Client } = require("pg");

// access to db
const db = new Client({
    connectionString: "postgresql://carl:WBFMMmhrJWAJXjAV56zA3w@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/hackathon?sslmode=verify-full&options=--cluster%3Dhtn-hatch-5024"
});
db.connect(err => {
    if(err) console.log(err);
    else console.log("Connected to DB");
});

// get requested article
router.route("/:id").get((req, res) => {
    db.query(`SELECT * FROM users WHERE id = ${req.params.id}`).then(response => {
        if(response) res.json(response.rows[0]);
    });
})
.post((req, res) => {
    db.query('INSERT INTO users (id, name, biography, skills, team, linkedin, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [req.params.id, req.params.name, req.params.biography, req.params.skills, req.params.team, req.params.linkedin, req.params.username, req.params.password]).then(response => {
        if(response) res.json(response.rows[0]);
    });
    //also send a post request to create a new team if the user is creating a new team
    db.query(`INSERT INTO teams (name, description, seeking, accepted, declined) VALUES ('${req.params.name}', '', '', '', '')`).then(response => {
        if(response) res.json(response.rows[0]);
    });
});

// export router
module.exports = router;