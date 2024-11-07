export const generateRandomNumber = (limit) =>
  Math.floor(Math.random() * limit);

export const getRandomArbitrary = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
