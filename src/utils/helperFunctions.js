// Add common helper functions here

export const sanitisePhoneNumber = (number) =>
  number.replace(/\D/g, '').slice(0, 10);
