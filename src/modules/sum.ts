const SumNumbers = (a: number, b: number): number => {
  if (typeof a !== 'number' || typeof b !== 'number') {
     throw new Error('Both arguments must be numbers');
    }
  return a + b;
}
export default SumNumbers;
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html