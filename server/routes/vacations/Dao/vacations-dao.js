const connection = require('../../connection-wrapper');

let ServerError = require('../../../middleware/errors/server-error');
let ErrorType = require('../../../middleware/errors/error-type');

const addVacation = async (vacationAddDetails) => {
  let sql =
    'INSERT INTO vacations (description, destination,image,departure_date,arrival_date,price) VALUES (?,?,?,?,?,?);';

  let parameters = [
    vacationAddDetails.description,
    vacationAddDetails.destination,
    vacationAddDetails.image,
    vacationAddDetails.departure_date,
    vacationAddDetails.arrival_date,
    vacationAddDetails.price,
  ];

  try {
    const vacationDetails = await connection.executeWithParameters(
      sql,
      parameters
    );
    return vacationDetails.insertId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

const getOneVacation = async (id) => {
  let sql = 'SELECT * FROM vacations WHERE vacations.id=?;';

  try {
    const vacationDetails = await connection.executeWithParameters(sql, id);
    return vacationDetails;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

const getAllVacations = async () => {
  let sql = 'SELECT * FROM vacations;';

  try {
    const vacationsDetails = await connection.executeWithParameters(sql);
    return vacationsDetails;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

const updateVacation = async (vacationUpdateDetails, id) => {
  let sql =
    'UPDATE vacations SET description=?, destination=?, image=?, departure_date=?, arrival_date=?, price=? WHERE vacations.id=?;';

  let parameters = [
    vacationUpdateDetails.description,
    vacationUpdateDetails.destination,
    vacationUpdateDetails.image,
    vacationUpdateDetails.departure_date,
    vacationUpdateDetails.arrival_date,
    vacationUpdateDetails.price,
    id,
  ];

  try {
    const updatedId = await connection.executeWithParameters(sql, parameters);
    return updatedId.insertId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

const deleteVacation = async (id) => {
  let sql = 'DELETE FROM vacations WHERE vacations.id=?;';

  try {
    const deletedId = await connection.executeWithParameters(sql, id);
    return deletedId.insertId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

module.exports = {
  addVacation,
  getOneVacation,
  getAllVacations,
  deleteVacation,
  updateVacation,
};
