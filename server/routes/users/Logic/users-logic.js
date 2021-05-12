const usersDao = require('../Dao/users-dao');

const register = (userRegistrationDetails) => {
  //validations
  validateUserDetails(userRegistrationDetails);
  return usersDao.register(userRegistrationDetails);
};

const login = (userLoginDetails) => {
  //validations
  validateUserDetails(userLoginDetails);
  return usersDao.login(userLoginDetails);
};

const getOneUser = (id) => {
  return usersDao.getOneUser(id);
};

const getAllUsers = () => {
  return usersDao.getAllUsers();
};

const update = (userUpdateDetails, id) => {
  if (
    userUpdateDetails.username != null &&
    userUpdateDetails.password != null &&
    userUpdateDetails.firstName != null &&
    userUpdateDetails.lastName != null
  ) {
    return usersDao.update(userUpdateDetails, id);
  } else {
    console.log('You need to enter username and password you want to change');
  }
};

const deleteUser = (id) => {
  return usersDao.deleteUser(id);
};

const validateUserDetails = (userDetails) => {
  //validations
  console.log('validations good', userDetails);
};

module.exports = {
  register,
  login,
  getOneUser,
  getAllUsers,
  deleteUser,
  update,
};
