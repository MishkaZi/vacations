const express = require('express');
const usersLogic = require('../Logic/users-logic');

const router = express.Router();

//Registration
router.post('/', async (req, res) => {
  try {
    const userRegistrationDetails = req.body;
    const userId = await usersLogic.register(userRegistrationDetails);
    console.log(userId);

    res.json('User was added -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const userLoginDetails = req.body;
    const result = await usersLogic.login(userLoginDetails);
    console.log(result);

    res.json('User loged in -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});


//Get all users
router.get('/', async (req, res) => {
  try {
    const users = await usersLogic.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//Get one user
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await usersLogic.getOneUser(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//Update
router.put('/:id', async (req, res) => {
  try {
    const userUpdateDetails = req.body;
    const id = req.params.id;
    const result = await usersLogic.update(userUpdateDetails, id);
    console.log(result);

    res.json('User was updated -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//Delete
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await usersLogic.deleteUser(id);
    console.log(result);

    res.json('User was deleted -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
