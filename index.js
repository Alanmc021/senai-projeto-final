// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userController = require('./src/controllers/playerController');

app.get('/users', userController.getPlayerById);
//app.get('/users/:id', userController.getUserById);
//app.post('/users', userController.createUser);
//app.put('/users/:id', userController.updateUser);
//app.delete('/users/:id', userController.deleteUser);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});