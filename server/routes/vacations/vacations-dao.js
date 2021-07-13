const connection = require('../connection-wrapper');

let ServerError = require('../../middleware/errors/server-error');
let ErrorType = require('../../middleware/errors/error-type');

const addVacation = async (vacationAddDetails) => {
  let sql =
    'INSERT INTO vacations (description, destination,image,departure_date,arrival_date,price) VALUES (?,?,?,?,?,?);';

  let parameters = [
    vacationAddDetails.description,
    vacationAddDetails.destination,
    vacationAddDetails.image,
    vacationAddDetails.startDate,
    vacationAddDetails.endDate,
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

//Get all vacations by user followed
const getAllVacations = async (userId) => {
  //Should be fixed and used in the future
  let sql = `
  SELECT v.id as vacationId, v.description, v.destination, v.image,v.price, followed_vacations.user_id AS userId,
  DATE_FORMAT(v.departure_date, '%Y/%m/%d') AS startDate,
  DATE_FORMAT(v.arrival_date,'%Y/%m/%s') AS endDate,
  
  (SELECT COUNT(*) FROM followed_vacations WHERE vacation_id = v.id) AS numOfFollowers           
  FROM vacations v
  
  LEFT JOIN followed_vacations  
  ON v.id=followed_vacations.vacation_id && followed_vacations.user_id=?
  ORDER BY  followed_vacations.user_id DESC;`;

  let parameters = [userId];

  // let sql = 'SELECT * FROM vacations;';

  try {
    const vacationsDetails = await connection.executeWithParameters(
      sql,
      parameters
    );
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
    vacationUpdateDetails.startDate,
    vacationUpdateDetails.endDate,
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
  let sql = 'DELETE FROM vacations v WHERE v.id=?;';
  let sql2 = 'DELETE FROM followed_vacations fv WHERE fv.vacation_id=?;';

  try {
    await connection.executeWithParameters(sql2, id);
    const deletedId = await connection.executeWithParameters(sql, id);
    return deletedId.insertId;
  } catch (error) {
    throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
  }
};

//For future
// const getOneVacation = async (id) => {
//   let sql = 'SELECT * FROM vacations WHERE vacations.id=?;';

//   try {
//     const vacationDetails = await connection.executeWithParameters(sql, id);
//     return vacationDetails;
//   } catch (error) {
//     throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
//   }
// };

module.exports = {
  addVacation,
  // getOneVacation,s
  getAllVacations,
  deleteVacation,
  updateVacation,
};
