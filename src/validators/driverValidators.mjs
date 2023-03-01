import Joi from 'joi';

const driverValidators = {
  postDriverCreate: (req, res, next) => {
    const result = Joi.object({
      adhaar: Joi.string().length(12).pattern(/^[0-9]+$/).required().messages({
        'string.pattern.base':'only numbers is allowed',
        'string.length': 'adhaar must be 12 digit long',
        'any.required': 'adhaar is required',
      }),
      panCard: Joi.string().length(10).required().messages({
        'string.length': 'pan number must be 10 characters long',
        'any.required': 'pan number is required',
      }),
      drivingLicence: Joi.string()
        .required()
        .messages({
          'any.required': 'drivingLicence number is required',
        }),
      bankName:Joi.string().required().messages({
        'any.required':'bank name is required'
      }),
      ifscCode:Joi.string().required().messages({
        'any.required':'ifsc code is required'
      }),
      accountNo:Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.pattern.base':'only number is allowed',
        'any.required':'ifsc code is required',
      }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },

  postRouteCreate: (req, res, next) => {
    const result = Joi.object({
      routeStart: Joi.string().required().messages({
        'any.required': 'routeStart is required',
      }),
      routeEnd: Joi.string().required().messages({
        'any.required': 'routeEnd is required',
      }),
      scheduleDate: Joi.string()
        .required()
        .messages({
          'any.required': 'scheduleDate number is required',
        }),
    }).validate(req.body);
    if (result.error) throw new Error(result.error);
    next();
  },
};

export default driverValidators;
