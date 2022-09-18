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
    db.query(`SELECT * FROM teams WHERE id = ${req.params.id}`).then(response => {
        if(response) res.json(response.rows[0]);
    });
})
.delete((req, res) => {
    db.query(`DELETE FROM teams WHERE id = ${req.params.id}`).then(response => {
        if(response) res.json(response.rows[0]);
    });
});

router.route().post((req, res) => {
    db.query('INSERT INTO teams VALUES ($1, $2, $3, ARRAY$4, ARRAY$5, ARRAY$6, ARRAY$7)', [req.params.id, req.params.name, req.params.description, req.params.members, req.params.seeking, req.params.accepted, req.params.declined]).then(response => {
        if(response) res.json(response.rows[0]);
    });
});

// export router
module.exports = router;