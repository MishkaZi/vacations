const vacationsDao = require('../Dao/vacations-dao');

const addVacation = async (vacationAddDetails) => {
  validateVacationDetails(vacationAddDetails);
  const addedVacationId = await vacationsDao.addVacation(vacationAddDetails);
  return addedVacationId;
};

const getAllVacations = async () => {
  const vacations = await vacationsDao.getAllVacations();
  return vacations;
};

const getOneVacation = async (id) => {
  const vacation = await vacationsDao.getOneVacation(id);
  return vacation;
};

const updateVacation = async (vacationUpdateDetails, id) => {
  validateVacationDetails(vacationUpdateDetails);
  const updatedVacationId = await vacationsDao.updateVacation(
    vacationUpdateDetails,
    id
  );
  return updatedVacationId;
};

const deleteVacation = async (id) => {
  const deletedId = await vacationsDao.deleteVacation(id);
  return deletedId;
};

//Validation function
const validateVacationDetails = (vacationAddDetails) => {
  if (vacationAddDetails.description == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Description cant be empty',
      'Description cant be empty'
    );
  }

  if (vacationAddDetails.destination == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Destination cant be empty',
      'Destination cant be empty'
    );
  }

  if (vacationAddDetails.image == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Image path cant be empty',
      'Image path cant be empty'
    );
  }

  if (vacationAddDetails.departureDate == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Departure date cant be empty',
      'Departure date cant be empty'
    );
  }

  if (vacationAddDetails.arrivalDate == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Arrival date cant be empty',
      'Arrival date cant be empty'
    );
  }

  if (vacationAddDetails.price == null) {
    throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Price cant be empty',
      'Price cant be empty'
    );
  }
};

module.exports = {
  addVacation,
  getOneVacation,
  getAllVacations,
  deleteVacation,
  updateVacation,
};
