const vacationsDao = require('../Dao/vacations-dao');

const addVacation = (vacationAddDetails) => {
  //validations
  validateVacationDetails(vacationAddDetails);
  return vacationsDao.addVacation(vacationAddDetails);
};

const getAllVacations = () => {
  return vacationsDao.getAllVacations();
};

const getOneVacation = (id) => {
  return vacationsDao.getOneVacation(id);
};

const updateVacation = (vacationUpdateDetails, id) => {
  if (
    vacationUpdateDetails.description != null &&
    vacationUpdateDetails.destination != null &&
    vacationUpdateDetails.image != null &&
    vacationUpdateDetails.departureDate != null &&
    vacationUpdateDetails.arrivalDate != null &&
    vacationUpdateDetails.price != null
  ) {
    vacationsDao.updateVacation(vacationUpdateDetails, id);
  } else {
    console.log(
      'You need to enter vacationname and password you want to change'
    );
  }
};

const deleteVacation = (id) => {
  vacationsDao.deleteVacation(id);
};

const validateVacationDetails = (vacationAddDetails) => {
  //validations
  console.log('validations good', vacationAddDetails);
};

module.exports = {
  addVacation,
  getOneVacation,
  getAllVacations,
  deleteVacation,
  updateVacation,
};
