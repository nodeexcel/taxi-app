import Joi from 'joi';

const passengerValidators = {
  postParcelCreate: (req, res, next) => {
    const result = Joi.object({
      dimension: Joi.string().required().messages({
        'any.required': 'adhaar is required',
      }),
      latitude: Joi.string().required().messages({
        'any.required': 'drop location is required',
      }),
      longitude: Joi.string().required().messages({
        'any.required': 'drop location is required',
      }),
      originImage: Joi.string()
        .required()
        .messages({
          'any.required': 'originImage is required',
        }),
      scheduleDate:Joi.string().required().messages({
        'any.required':'scheduleDate is required'
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

export default passengerValidators;