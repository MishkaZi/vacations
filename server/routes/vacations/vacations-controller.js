const express = require('express');
const vacationsLogic = require('./vacations-logic');
const cacheModule = require('../cache-module');

const router = express.Router();

//Add vacation
router.post('/', async (req, res, next) => {
  try {
    const vacationAddDetails = req.body;
    const vacationId = await vacationsLogic.addVacation(vacationAddDetails);

    res.json(vacationId);
  } catch (error) {
    return next(error);
  }
});

//Get all vacations
router.get('/', async (req, res, next) => {
  try {
    const userdata = cacheModule.extractUserDataFromCache(req);
    console.log(userdata);
    const vacations = await vacationsLogic.getAllVacations(userdata.id);

    res.json(vacations);
  } catch (error) {
    return next(error);

  }
});

//Get one vacation
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const vacation = await vacationsLogic.getOneVacation(id);

    res.json(vacation);
  } catch (error) {
    return next(error);
  }
});

//Update vacation
router.put('/:id', async (req, res, next) => {
  try {
    const vacationUpdateDetails = req.body;
    const id = req.params.id;
    const updatedId = await vacationsLogic.updateVacation(
      vacationUpdateDetails,
      id
    );

    res.json(updatedId);
  } catch (error) {
    return next(error);
  }
});

//Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedId = await vacationsLogic.deleteVacation(id);

    res.json(deletedId);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
