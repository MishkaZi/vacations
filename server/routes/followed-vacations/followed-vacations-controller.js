const express = require('express');
const vacationsLogic = require('./followed-vacations-logic');
const cacheModule = require('../cache-module');

const router = express.Router();

//Follow vacation
router.post('/follow', async (req, res, next) => {
  try {
    const vacationId = req.body.vacationId;
    const userDetails = cacheModule.extractUserDataFromCache(req);

    const result = await vacationsLogic.userFollowsVacation(
      userDetails.id,
      vacationId
    );

    res.json(result);
  } catch (error) {
    return next(error);
  }
});

//Unfollow vacation
router.post('/unfollow', async (req, res, next) => {
  try {
    const vacationId = req.body.vacationId;
    const userDetails = cacheModule.extractUserDataFromCache(req);

    const result = await vacationsLogic.userUnFollowsVacation(
      userDetails.id,
      vacationId
    );

    res.json(result);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
