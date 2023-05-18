const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const playerController = require("./controllers/playerController");

app.get("/player/:id", playerController.getPlayerById); 
app.post("/player", playerController.createPlayer);
app.put("/player/:id", playerController.deletePlayer);
app.delete("/player/:id", playerController.updatePlayer);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});