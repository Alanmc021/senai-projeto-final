// controllers/userController.js

const userService = require("../services/userService");

async function getPlayerById(req, res) {
	try {
		const response = await userService.getPlayerById();
		res.status(200).json("tudo funcionado, player sendo pego pelo ai" + response);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving users from database");
	}
}

async function createPlayer(req, res) {
	try {
		const newUser = await userService.createUser(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error creating user in database");
	}
}

async function updatePlayer(req, res) {
	try {
		const updatedUser = await userService.updateUser(req.params.id, req.body);
		if (!updatedUser) {
			res.status(404).send("User not found");
		} else {
			res.status(200).json(updatedUser);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send("Error updating user in database");
	}
}

async function deletePlayer(req, res) {
	try {
		await userService.deleteUser(req.params.id);
		res.status(204).send();
	} catch (err) {
		console.error(err);
		res.status(500).send("Error deleting user from database");
	}
}

module.exports = {
	getPlayerById, 
	createPlayer,
	updatePlayer,
	deletePlayer,
};