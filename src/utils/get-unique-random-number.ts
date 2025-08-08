export function* getUniqueRandomNumber(min: number, max: number): Generator<number> {
  if (min > max) [min, max] = [max, min]

  const numbers = []

  for (let i = min; i <= max; i++) {
    numbers.push(i)
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }

  for (const number of numbers) yield number
}

