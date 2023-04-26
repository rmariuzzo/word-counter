import { countWords } from './countWords';

describe('countWords', () => {
  it('should count each string in the input array', () => {
    const arr = ['apple', 'banana', 'banana', 'Cherry', 'cherry', 'Cherry', 'DURIAN'];
    const expectedCounts = { 'apple': 1, 'banana': 2, 'cherry': 3, 'durian': 1 };
    const result = countWords(arr);
    expect(result).toEqual(expectedCounts);
  });

  it('should return an empty object when given an empty array', () => {
    const arr: string[] = [];
    const result = countWords(arr);
    expect(result).toEqual({});
  });

  it('should handle arrays with only one element', () => {
    const arr = ['apple'];
    const expectedCounts = { 'apple': 1 };
    const result = countWords(arr);
    expect(result).toEqual(expectedCounts);
  });

  it('should handle arrays with multiple elements but only one unique string', () => {
    const arr = ['apple', 'Apple', 'APPLE'];
    const expectedCounts = { 'apple': 3 };
    const result = countWords(arr);
    expect(result).toEqual(expectedCounts);
  });

  it('should handle arrays with multiple elements but no unique strings', () => {
    const arr = ['apple', 'banana', 'apple', 'banana'];
    const expectedCounts = { 'apple': 2, 'banana': 2 };
    const result = countWords(arr);
    expect(result).toEqual(expectedCounts);
  });
});
