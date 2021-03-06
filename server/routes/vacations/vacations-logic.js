const vacationsDao = require('./vacations-dao');
let ServerError = require('../../middleware/errors/server-error');
let ErrorType = require('../../middleware/errors/error-type');

const addVacation = async (vacationAddDetails) => {
  validateVacationDetails(vacationAddDetails);
  const addedVacationId = await vacationsDao.addVacation(vacationAddDetails);
  return addedVacationId;
};

const getAllVacations = async (id) => {
  const vacations = await vacationsDao.getAllVacations(id);
  return vacations;
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
      
      if (!validURL) {
        throw new ServerError(
      ErrorType.INVALID_VACATION_DETAILS,
      'Not valid URL for image!',
      'Not valid URL for image!'
      );
    }
    
    if (vacationAddDetails.startDate == null) {
      throw new ServerError(
        ErrorType.INVALID_VACATION_DETAILS,
        'Departure date cant be empty',
        'Departure date cant be empty'
        );
      }
      
      if (vacationAddDetails.endDate == null) {
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
        
        //Check if image is a valid URL
        const validURL = (string) => {
          var pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(string);
};

//For future
// const getOneVacation = async (id) => {
//   const vacation = await vacationsDao.getOneVacation(id);
//   return vacation;
// };

module.exports = {
  addVacation,
  // getOneVacation,
  getAllVacations,
  deleteVacation,
  updateVacation,
};
