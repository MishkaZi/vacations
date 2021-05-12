const express = require('express');
const usersLogic = require('../Logic/users-logic');

const router = express.Router();

//Get all users
router.get('/', async (req, res) => {
  try {
    const users = await usersLogic.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
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
  }
});

// //Login
// router.post('/login', (req, res) => {
//   try {
//     const userRegistrationDetails = req.body;
//     console.log(userRegistrationDetails);
//     usersLogic.register(userRegistrationDetails);
//     res.json('all good');
//   } catch (error) {
//     console.log(error);
//   }
// });

//Registration
router.post('/', async (req, res) => {
  try {
    const userRegistrationDetails = req.body;
    const result = await usersLogic.register(userRegistrationDetails);
    console.log(result);

    res.json('User was added -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
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
  }
});

module.exports = router;
