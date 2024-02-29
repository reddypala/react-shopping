var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;


var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var database;

app.get('/getusers', async (req, res) => {
    try {
        const clientObj = await mongoClient.connect(connectionString);
        database = clientObj.db("reactdb");
        const documents = await database.collection("tblusers").find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/registeruser", async (req, res) => {
    try {
        const clientObj = await mongoClient.connect(connectionString);
        const database = clientObj.db("reactdb");
        const userDetails = {
            userId: req.body.userId,
            userName: req.body.userName,
            password: req.body.password,
            Age: parseInt(req.body.Age),
            Mobile: req.body.Mobile,
            subscribe: (req.body.subscribe === "true") ? true : false
        };
        await database.collection("tblusers").insertOne(userDetails);
        console.log("Record Inserted");

        const updatedUsers = await database.collection("tblusers").find({}).toArray();
        res.send(updatedUsers);
        res.redirect("/getusers");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/getproducts", async (req, res) => {
    try {
        const clientObj = await mongoClient.connect(connectionString);
        database = clientObj.db("reactdb");
        const documents = await database.collection("products").find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
app.get("/getcategories", async (req, res) => {
    try {
        const clientObj = await mongoClient.connect(connectionString);
        database = clientObj.db("reactdb");
        const documents = await database.collection("categories").find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
app.get("/getproduct/:id", async (req, res) => {
    let productid = parseInt(req.params.id);
    try {
        const clientObj = await mongoClient.connect(connectionString);
        database = clientObj.db("reactdb");
        const documents = await database.collection("products").find({id:productid}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(4000, () => {
    console.log('Server started on port 4000');
});

