import { getWords } from './getWords';

describe('getWords', () => {
  it('should extract all words from a string', () => {
    const str = 'The quick brown fox jumps over the lazy dog';
    const expectedWords = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
    const result = getWords(str);
    expect(result).toEqual(expectedWords);
  });

  it('should return an empty array when given an empty string', () => {
    const str = '';
    const result = getWords(str);
    expect(result).toEqual([]);
  });

  it('should match numbers', () => {
    const str = '1234!@#$%^&*()';
    const result = getWords(str);
    expect(result).toEqual(['1234']);
  });
});
