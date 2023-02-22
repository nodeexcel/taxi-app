 export const isValidPhoneNo = (phoneNo) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNo);
  };
  
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };