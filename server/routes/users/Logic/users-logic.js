const usersDao = require('../Dao/users-dao');

const register = async (userRegistrationDetails) => {
  //validations
  validateUserDoesNotExist(userRegistrationDetails);
  validateUserDetails(userRegistrationDetails);

  return await usersDao.register(userRegistrationDetails);
};

const login = async (userLoginDetails) => {
  //validations
  validateUserDetails(userLoginDetails);
  return await usersDao.login(userLoginDetails);
};

const getOneUser = async (id) => {
  return await usersDao.getOneUser(id);
};

const getAllUsers = async () => {
  return await usersDao.getAllUsers();
};

const update = (userUpdateDetails, id) => {
  //validations
  validateUserDetails(userUpdateDetails);
  return usersDao.update(userUpdateDetails, id);
};

const deleteUser = (id) => {
  return usersDao.deleteUser(id);
};

const validateUserDoesNotExist = async (userDetails) => {
  if (await usersDao.isUsernameExist(userDetails.username)) {
    console.log('user does exist');
    throw new Error('This username already in database');
  }
};

const validateUserDetails = (userDetails) => {
  //validations
  console.log('validations good', userDetails);
  //Username
  if (userDetails.username == null) {
    throw new Error('Username null!');
  }

  if (!isEmailFormat(userDetails.username)) {
    throw new Error('Username not email format!');
  }

  //Password
  if (userDetails.password == null) {
    throw new Error('Password null!');
  }

  if (userDetails.password.length < 6) {
    throw new Error('Password too short');
  }

  if (userDetails.password.length > 12) {
    throw new Error('Password too long');
  }
};

const isEmailFormat = (username) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(username).toLowerCase());
};

module.exports = {
  register,
  login,
  getOneUser,
  getAllUsers,
  deleteUser,
  update,
};
