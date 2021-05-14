const connection = require('../../connection-wrapper');

//Login
const login = async (userLoginDetails) => {
  let sql = 'SELECT * FROM users WHERE username=? AND password=?;';

  let parameters = [userLoginDetails.username, userLoginDetails.password];

  try {
    const userLoginResult = await connection.executeWithParameters(
      sql,
      parameters
    );
    //Check if username and password match ones in DB
    if (userLoginResult == null || userLoginResult.length == 0) {
      throw new Error('Unauthorized!');
    }

    return userLoginResult[0];
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

//Register
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
    return userRegistrationResult.insertId;
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

//Helping function
const isUsernameExist = async (username) => {
  let sql = 'SELECT username FROM users WHERE username = ?;';
  console.log(username);
  let parameters = [username];

  const userExistResult = await connection.executeWithParameters(
    sql,
    parameters
  );

  console.log('userExistResult: ' + userExistResult);

  if (userExistResult == null || userExistResult.length === 0) {
    console.log('doesnt exist');
    return false;
  }
  console.log('exist');

  return true;
};

const getOneUser = async (id) => {
  let sql = 'SELECT * FROM users WHERE users.id=?;';

  try {
    userDetails = await connection.executeWithParameters(sql, id);
    return userDetails;
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

const getAllUsers = async () => {
  let sql = 'SELECT * FROM users;';

  try {
    usersDetails = await connection.executeWithParameters(sql);
    return usersDetails;
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

const update = async (userUpdateDetails, id) => {
  let sql = 'UPDATE users SET username=?, password=? WHERE users.id=?;';

  let parameters = [userUpdateDetails.username, userUpdateDetails.password, id];

  try {
    const result = await connection.executeWithParameters(sql, parameters);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

const deleteUser = async (id) => {
  let sql = 'DELETE FROM users WHERE users.id=?;';

  try {
    const result = await connection.executeWithParameters(sql, id);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('General error');
  }
};

module.exports = {
  register,
  login,
  getOneUser,
  getAllUsers,
  deleteUser,
  update,
  isUsernameExist,
};
