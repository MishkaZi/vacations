let ErrorType = {
    
    GENERAL_ERROR : {id: 1, httpCode: 600, message : "A general error, read logs.", isShowStackTrace: true},
    USER_NAME_ALREADY_EXIST : {id: 2, httpCode: 601, message : "User name already exist", isShowStackTrace: false},
    UNAUTHORIZED : {id: 3, httpCode: 401, message : "Login failed, invalid user name or password", isShowStackTrace: false},
    FAILED_VALIDATION : {id: 4, httpCode: 401, message : "Invalid user name or password", isShowStackTrace: true}
}

module.exports = ErrorType;