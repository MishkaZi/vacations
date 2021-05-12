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
    return vacationsDao.updateVacation(vacationUpdateDetails, id);
  } else {
    console.log(
      'You need to enter description, destination, image, departure date, arrival date and price!'
    );
  }
};

const deleteVacation = (id) => {
  return vacationsDao.deleteVacation(id);
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
