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
.update((req, res) => {
    db.query(`UPDATE teams SET name = '${req.params.name}', description = '${req.params.description}', seeking = '${req.params.seeking}', accepted = '${req.params.accepted}', declined = '${req.params.declined}' WHERE id = ${req.params.id}`).then(response => {
        if(response) res.json(response.rows[0]);
    });
})
.delete((req, res) => {
    db.query(`DELETE FROM teams WHERE id = ${req.params.id}`).then(response => {
        if(response) res.json(response.rows[0]);
    });
})
.merge((req, res) => {
    
    
});


// export router
module.exports = router;