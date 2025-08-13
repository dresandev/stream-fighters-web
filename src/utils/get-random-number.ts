export const getRandomNumber = (min: number, max: number) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
