import Joi from 'joi';


const userValidators = {
  postUserCreate: (req, res, next) => {
    const result = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.alphanum': 'Username must contain only letters and numbers',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username cannot be longer than 30 characters',
        'any.required': 'Username is required',
      }),

      password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)
        .required()
        .messages({
          'string.pattern.base':
            'Password must be at least 8 characters long and contain at least one letter and one number',
          'any.required': 'Password is required',
        }),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
        .required()
        .messages({
          'string.email': 'Email must be a valid email address',
          'any.required': 'Email is required',
        }),

      phoneNo: Joi.string()
        .pattern(/^[6-9]\d{9}$/)
        .required()
        .messages({
          'string.pattern.base':
            'Mobile number must be 10 digits and start with a digit from 6 to 9',
          'any.required': 'Mobile number is required',
        }),
      firstname: Joi.string()
        .pattern(/^[a-zA-Z]{2,30}$/)
        .required()
        .messages({
          'string.pattern.base':
            'First name must contain only letters and be 2 to 30 characters long',
          'any.required': 'First name is required',
        }),
      lastname: Joi.string()
        .pattern(/^[a-zA-Z]{2,30}$/)
        .required()
        .messages({
          'string.pattern.base':
            'Last name must contain only letters and be between 2 and 30 characters long',
          'any.required': 'Last name is required',
        }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },

  postUserLogin: (req, res, next) => {
    const result = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
        .required()
        .messages({
          'string.email': 'Email must be a valid email address',
          'any.required': 'Email is required',
        }),
      password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)
        .required()
        .messages({
          'string.pattern.base': 'Invaild Password',
          'any.required': 'Password is required',
        }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },

  putUserUpdate: (req, res, next) => {
    const result = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).optional().messages({
        'string.alphanum': 'Username must contain only letters and numbers',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username cannot be longer than 30 characters',
      }),

      password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)
        .optional()
        .messages({
          'string.pattern.base':
            'Password must be at least 8 characters long and contain at least one letter and one number',
        }),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
        .optional()
        .messages({
          'string.email': 'Email must be a valid email address',
        }),

      phoneNo: Joi.string()
        .pattern(/^[6-9]\d{9}$/)
        .optional()
        .messages({
          'string.pattern.base':
            'Mobile number must be 10 digits and start with a digit from 6 to 9',
        }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },

  putUserProfile: (req, res, next) => {
    const result = Joi.object({
      firstname: Joi.string()
        .pattern(/^[a-zA-Z]{2,30}$/)
        .optional()
        .messages({
          'string.pattern.base':
            'First name must contain only letters and be 2 to 30 characters long',
        }),
      lastname: Joi.string()
        .pattern(/^[a-zA-Z]{2,30}$/)
        .optional()
        .messages({
          'string.pattern.base':
            'Last name must contain only letters and be between 2 and 30 characters long',
        }),
      isActive: Joi.boolean().optional().messages({
        'boolean.base': 'isActive must be a boolean value',
      }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },
};

export default userValidators;
