const userModel = require("../models/playerController");

async function getPlayerById() {
	// aqui vai pegar o modelo do player
	// vai criar alguma cois no firebase
	//const users = await userModel.find({});
	console.log(userModel);
	return "Pegou algo do firebase tb";
}

async function getUserById(id) {
	// const user = await userModel.findById(id);
	return "user";
}

async function createUser(user) {
	//const newUser = new userModel(user);
	//await newUser.save();
	return "newUser";
}

async function updateUser(id, user) {
	//const updatedUser = await userModel.findByIdAndUpdate(id, user, { new: true });
	return "updatedUser";
}

async function deleteUser(id) {
	//await userModel.findByIdAndDelete(id);
}

module.exports = {
	getPlayerById,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};