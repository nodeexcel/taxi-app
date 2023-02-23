import User from '../models/user.mjs';

export const isValidPhoneNo = (phoneNo) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phoneNo);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const userExists = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const phoneNoExists = async (phoneNo) => {
  const user = await User.findOne({ where: { phoneNo: phoneNo } });
  if (user) {
    return true;
  } else {
    return false;
  }
};
