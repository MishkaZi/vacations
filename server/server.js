const express = require('express');
const cors = require('cors');
const usersController = require('./routes/users/users-controller');
const vacationsController = require('./routes/vacations/vacations-controller');
const followedVacationsController = require('./routes/followed-vacations/followed-vacations-controller');
const errorHandler = require('./middleware/errors/error-handler');
const loginFilter = require('./middleware/login-filter');

const server = express();

server.use(
  cors({
    origin: 'http://localhost:3000',
    // , origin: 'http://localhost:4200'
  })
);
server.use(express.json());
server.use(loginFilter());

server.use('/users', usersController);
server.use('/vacations', vacationsController);
server.use('/followed-vacations', followedVacationsController);
server.use(errorHandler);

server.listen(3001, () => {
  console.log('Running on 3001');
});
