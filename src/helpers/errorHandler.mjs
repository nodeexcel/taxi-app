/**
 *
 * @param fn
 * handle errors without using try catch
 */
export const errorHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);