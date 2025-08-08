export const getRandomNumber = (min: number, max: number) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  const minNumber = Math.ceil(min);
  const maxNUmber = Math.floor(max);

  return Math.floor(Math.random() * (maxNUmber - minNumber + 1)) + minNumber;
}
