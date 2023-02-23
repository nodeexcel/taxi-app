import User from '../models/user.mjs';

export const isValidPhoneNo = (phoneNo) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phoneNo);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const userExists = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    return true;
  } else {
    return false;
  }
};

const phoneNoExists = async (phoneNo) => {
  const user = await User.findOne({ where: { phoneNo: phoneNo } });
  if (user) {
    return true;
  } else {
    return false;
  }
};

export async function validateUserInputs(email, phoneNo) {
  if (!isValidPhoneNo(phoneNo)) {
    return {
      success: false,
      message: 'Please enter a valid phone number.',
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  const userExist = await userExists(email);
  const phoneNoExist = await phoneNoExists(phoneNo);

  if (userExist) {
    return {
      success: false,
      message: 'User with given Email address already registered.',
    };
  }

  if (phoneNoExist) {
    return {
      success: false,
      message: 'User with given Phone Number already registered.',
    };
  }

  return { success: true };
}
