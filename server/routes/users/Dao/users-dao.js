const connection = require('../../connection-wrapper');

const register = async (userRegistrationDetails) => {
  let sql =
    'INSERT INTO users (username, password,first_name, last_name, is_admin) VALUES (?,?,?,?,?);';

  let parameters = [
    userRegistrationDetails.username,
    userRegistrationDetails.password,
    userRegistrationDetails.firstName,
    userRegistrationDetails.lastName,
    userRegistrationDetails.isAdmin,
  ];

  try {
    const userRegistrationResult = await connection.executeWithParameters(
      sql,
      parameters
    );
    return userRegistrationResult;
  } catch (e) {
    throw console.log(e);
  }
};

const login = async (userLoginDetails) => {
  let sql = 'select * from users where users.username=?';

  let parameters = [userLoginDetails.username];

  try {
    const userRegistrationResult = await connection.executeWithParameters(
      sql,
      parameters
    );
    return userRegistrationResult;
  } catch (e) {
    throw console.log(e);
  }
};

const getOneUser = async (id) => {
  let sql = 'SELECT * FROM users WHERE users.id=?;';

  try {
    userDetails = await connection.executeWithParameters(sql, id);
    return userDetails;
  } catch (e) {
    throw console.log(e);
  }
};

const getAllUsers = async () => {
  let sql = 'SELECT * FROM users;';

  try {
    usersDetails = await connection.executeWithParameters(sql);
    return usersDetails;
  } catch (e) {
    throw console.log(e);
  }
};

const update = async (userUpdateDetails, id) => {
  let sql = 'UPDATE users SET username=?, password=? WHERE users.id=?;';

  let parameters = [userUpdateDetails.username, userUpdateDetails.password, id];

  try {
    const result = await connection.executeWithParameters(sql, parameters);
    return result;
  } catch (e) {
    throw console.log(e);
  }
};

const deleteUser = async (id) => {
  let sql = 'DELETE FROM users WHERE users.id=?;';

  try {
    const result = await connection.executeWithParameters(sql, id);
    return result;
  } catch (e) {
    throw console.log(e);
  }
};

module.exports = {
  register,
  login,
  getOneUser,
  getAllUsers,
  deleteUser,
  update,
};
