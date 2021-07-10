const followedVacationsDao = require('./followed-vacations-dao');

const userFollowsVacation = async (userId, vacationId) => {
  const result = await followedVacationsDao.userFollowsVacation(userId, vacationId);
  return result;
};

const userUnFollowsVacation = async (userId, vacationId) => {
  const result = await followedVacationsDao.userUnFollowsVacation(userId, vacationId);
  return result;
};



module.exports = {
  userFollowsVacation,
  userUnFollowsVacation
};
