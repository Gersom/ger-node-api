import customError from './customError.js';

// Base Error Class
export const BaseError = class extends Error {
  constructor(err, customMessage, context) {
    const messageToprint = `Error definition not found for ${err.code}`
    if (!err) throw new Error(messageToprint);

    super(customMessage || err.description);
    this.name = this.constructor.name;
    this.code = err.code;
    this.status = err.status;
    this.context = context || null;
  }
}

// Factory function to create error classes
const createErrorClass = (errorType) => {
  return class extends BaseError {
    constructor(customMessage, context) {
      super(errorType, customMessage, context);
    }
  };
};

// Authentication & Authorization Error Classes
export const UnauthorizedError = createErrorClass(customError.UNAUTHORIZED);
export const ForbiddenError = createErrorClass(customError.FORBIDDEN);
export const InvalidTokenError = createErrorClass(customError.INVALID_TOKEN);
export const TokenExpiredError = createErrorClass(customError.TOKEN_EXPIRED);
export const RefreshTokenExpiredError = createErrorClass(customError.REFRESH_TOKEN_EXPIRED);
export const RefreshTokenInvalidError = createErrorClass(customError.REFRESH_TOKEN_INVALID);

// Data & Resource Error Classes
export const NotFoundError = createErrorClass(customError.NOT_FOUND);
export const DataConflictError = createErrorClass(customError.DATA_CONFLICT);
export const ResourceExpiredError = createErrorClass(customError.RESOURCE_EXPIRED);

// Validation Error Classes
export const InvalidInputError = createErrorClass(customError.INVALID_INPUT);
export const CodeExpiredError = createErrorClass(customError.CODE_EXPIRED);

// Email Error Classes
export const EmailSendError = createErrorClass(customError.EMAIL_SEND_ERROR);

// Server Error Classes
export const InternalError = createErrorClass(customError.INTERNAL_ERROR);