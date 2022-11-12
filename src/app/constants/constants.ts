export const CoreMessages = {
  INVALID_CREDENTIALS: 'Invalid credentials.',
  PASSWORD_CHANGE_INVALID_REQUEST: 'Invalid credentials.',
  REGISTER_USER_EXIST: 'The email has already been registered in the system. Please log in instead.',
  JWT_ACCESS_TOKEN_INVALID:
    'Email link is outdated. Please check whether the password has been already updated by logging in.',
  CONFIRM_TOKEN_EXPIRED:
    'Email link is outdated. Please check whether the password has been already updated by logging in.',
};

export const SystemMessages = {
  SIGNUP_SUCCESS: 'The signup was successful. Please verify your email.',
  GENERIC_ERROR: 'An error occured. Please contact the system administrator.',
};

export const DEFAULT_LOCALE = 'en_GB';

// prettier-ignore
export const PASSWORD_VALIDATION_REGEX = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&_])[A-Za-z\\d$@$!%*#?&_]{8,}$";

export const SECRET = 'nrDdgF6W53cG0TCQHhIiz0PenRtNITEIhCkdukIp';
export const CLIENT_ID = '00000000000000000000000000000012';

export const DEFAULT_PASSWORD = 'Password1!';

export const Endpoints = {
  AUTH: {
    AUTHENTICATION: 'b2bapi/user/auth',
    REGISTRATION: 'b2bapi/user/register',
    EMAIL_REQUEST: 'b2bapi/user/restore/eMailRequest',
    CONFIRMATION: 'b2bapi/user/confirm',
  },
  USER: {
    GET: 'user',
    UPDATE: 'user/update',
  },
};

export const NO_TOKEN_ENDPOINTS = [
  Endpoints.AUTH.AUTHENTICATION,
  Endpoints.AUTH.REGISTRATION,
  Endpoints.AUTH.EMAIL_REQUEST,
  Endpoints.AUTH.CONFIRMATION,
];

export const ValidationMessages = {
  INVALID_PASSWORD_REGEX:
    'The minimum password length is 8 characters and must contain: 1 uppercase, 1 lowercase, 1 number and 1 special character',
  REQUIRED: 'Required',
  PASSWORD_DONT_MATCH: 'Password do not match',
  MAXIMUM_FILE_SIZE_EXCEEDED: 'File is too large. Max. size is ',
};

export const SIDEBAR_LINKS = {
  HOME: 'home',
};
