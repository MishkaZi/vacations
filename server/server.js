const express = require('express');
const cors = require('cors');
const usersController = require('./routes/users/Controllers/users-controller');
const vacationsController = require('./routes/vacations/Controllers/vacations-controller');

const server = express();

server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());
server.use('/users', usersController);
server.use('/vacations', vacationsController);

server.listen(3001, () => {
  console.log('Running on 3001');
});
