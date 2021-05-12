const connection = require('../../connection-wrapper');

const addVacation = async (vacationAddDetails) => {
  let sql =
    'INSERT INTO vacations (description, destination,image,departure_date,arrival_date,price) VALUES (?,?,?,?,?,?);';

  let parameters = [
    vacationAddDetails.description,
    vacationAddDetails.destination,
    vacationAddDetails.image,
    vacationAddDetails.departureDate,
    vacationAddDetails.arrivalDate,
    vacationAddDetails.price,
  ];

  try {
    const result = await connection.executeWithParameters(sql, parameters);
    return result;
  } catch (e) {
    throw console.log(e);
  }
};

const getAllVacations = async () => {
  let sql = 'SELECT * FROM vacations;';

  try {
    const vacationsDetails = await connection.executeWithParameters(sql);
    return vacationsDetails;
  } catch (e) {
    throw console.log(e);
  }
};

const getOneVacation = async (id) => {
  let sql = 'SELECT * FROM vacations WHERE vacations.id=?;';

  try {
    const vacationDetails = await connection.executeWithParameters(sql, id);
    return vacationDetails;
  } catch (e) {
    throw console.log(e);
  }
};

const updateVacation = async (vacationUpdateDetails, id) => {
  let sql =
    'UPDATE vacations SET description=?, destination=?, image=?, departure_date=?, arrival_date=?, price=? WHERE vacations.id=?;';

  let parameters = [
    vacationUpdateDetails.description,
    vacationUpdateDetails.destination,
    vacationUpdateDetails.image,
    vacationUpdateDetails.departureDate,
    vacationUpdateDetails.arrivalDate,
    vacationUpdateDetails.price,
    id,
  ];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    throw console.log(e);
  }
};

const deleteVacation = async (id) => {
  let sql = 'DELETE FROM vacations WHERE vacations.id=?;';

  try {
    await connection.executeWithParameters(sql, id);
  } catch (e) {
    throw console.log(e);
  }
};

module.exports = {
  addVacation,
  getOneVacation,
  getAllVacations,
  deleteVacation,
  updateVacation,
};
