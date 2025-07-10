export function sum(numbers: number[]) {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue)
}

export function average(numbers: number[]) {
  return sum(numbers) / numbers.length;
}