const express = require('express');
const vacationsLogic = require('../Logic/vacations-logic');

const router = express.Router();

//Add vacation
router.post('/', async (req, res) => {
  try {
    const vacationAddDetails = req.body;
    const result = await vacationsLogic.addVacation(vacationAddDetails);

    res.json('Vacation has been added - Using this response to stop postman');
  } catch (error) {
    console.log(error);
  }
});

//Get all vacations
router.get('/', async (req, res) => {
  try {
    const vacations = await vacationsLogic.getAllVacations();
    res.json(vacations);
  } catch (error) {
    console.log(error);
  }
});

//Get one vacation
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await vacationsLogic.getOneVacation(id);

    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

//Update vacation
router.put('/:id', (req, res) => {
  try {
    const vacationUpdateDetails = req.body;
    const id = req.params.id;
    vacationsLogic.updateVacation(vacationUpdateDetails, id);

    //Using this response to stop postman
    res.json('vacation was updated -  Using this response to stop postman');
  } catch (error) {
    console.log(error);
  }
});

//Delete
router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    vacationsLogic.deleteVacation(id);

    //Using this response to stop postman
    res.json('vacation deleted - Using this response to stop postman');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
