/* eslint-disable indent */
const messages = {
    SUCCESS: 'success',
    FAILED: 'failed',
    ERROR: 'error',
    EMPTY: '%s is empty.',
    ID_NOT_FOUND: 'ID is not found',
    USERNAME_NOT_FOUND: 'Username is not found',
    ACCOUNT_NOT_FOUND: 'Sorry, you do not have an account',
    EMAIL_NOT_FOUND: 'Email is not found',
    SIGNER_NOT_EXIST: 'Sorry, signer does not exist',
    VAULT_NOT_EXIST: 'Oops! The vault does not exist',
    ROUTE_NOT_FOUND: 'Route not found',
    TOKEN_NOT_FOUND: 'Token is not found',
    WALLET_NOT_EXIST: 'Wallet does not exist',
    INVALID_TOKEN: 'Token is invalid or expired',
    FORBIDDEN: 'You do not have access to this route',
    NO_ACCESS: 'You do not have access to this route',
    UNAUTHORIZED: 'You are unauthorized. Please login first',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    PASSWORD_MISMATCH: 'Passwords does not match',
    PASSWORD_UPDATE_FAILURE: 'Password update failed',
    PASSWORD_UPDATE_SUCCESS: 'Password update successful',
    OLD_PASSWORD_NOT_CORRECT: 'Old password is not correct',
    EMAIL_EXIST: 'Email already exist',
    TOKEN_EXIST: 'Token already exist',
    WRONG_USERNAME_PASSWORD: 'Username or Password is not correct',
    KEY_EXPIRED: 'Key/Token/Code has expired.',
    KEY_INVALID: 'Key/Token/Code is invalid',
    KEY_REQUIRED: 'Key/Token/Code is required',
    KEY_VALID: 'Key/Token/Code is valid',
    NOT_SIGNED: 'Signer/Co-Signer needs to sign this transaction',
    ALREADY_SIGNED: 'You already signed this transaction',
    ALREADY_LINKED: 'Username is already linked with an Hydro username',
    DB_ERROR: 'An error occured while trying to perform the database operation',
    OPERATION_SUCCESS: 'Operation successful',
    OPERATION_FAILURE: 'Operation failed',
    INCORRECT_MESSAGE: 'User did not sign the correct message',
    HYDRO_AUTH_USER_ERROR: 'User was authenticated with the Hydro API, but the status could not be saved in the database',
    HYDRO_ID_NOT_FOUND: 'The HydroID does not exist. So, it cannot be registered',
    USER_NOT_VERIFIED: 'User is not verified',
    VAULT_DUP_EXIST: 'The vault name already exist.',
    UNAUTHORIZED_INITIATOR: 'Unathorized Shared Vault Initiator',
    TRANSACTION_ERROR: 'An error occured while making the transaction',
    TRANSACTION_SUCCESS: 'Your transaction was',
    DAILY_TX_EXCEED: 'You cannot exceed your daily transaction limit',
    DAILY_TX_HOUR_EXCEED: 'You cannot exceed your hourly transacton limit',
    DAILY_AMOUNT_EXCEED: 'You cannot exceed your daily transaction amount'

};

module.exports = messages;