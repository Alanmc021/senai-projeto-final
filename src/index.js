const express = require("express"); 
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializa o Firebase
const serviceAccount = require("../key.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://node-teste-6cb6e-default-rtdb.firebaseio.com"
});

const playerController = require("./controllers/playerController");

app.get("/player/:id", playerController.getPlayerById); 
app.post("/player", playerController.createPlayer);
app.put("/player/:id", playerController.deletePlayer);
app.delete("/player/:id", playerController.updatePlayer);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});