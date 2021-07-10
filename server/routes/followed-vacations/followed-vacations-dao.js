const connection = require('../connection-wrapper');

let ServerError = require('../../middleware/errors/server-error');
let ErrorType = require('../../middleware/errors/error-type');

const userFollowsVacation = async (userId, vacationId) => {
  let sql =
    'INSERT INTO followed_vacations (user_id,vacation_id) VALUES (?,?);';

  let parameters = [userId, vacationId];

  try {
    await connection.executeWithParameters(sql, parameters);
    return userId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

const userUnFollowsVacation = async (userId, vacationId) => {
  let sql =
    'DELETE FROM followed_vacations WHERE (user_id=? AND vacation_id=?);';

  let parameters = [userId, vacationId];

  try {
    await connection.executeWithParameters(sql, parameters);
    return userId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

module.exports = {
  userFollowsVacation,
  userUnFollowsVacation,
};
