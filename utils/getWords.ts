export function getWords(str: string): string[] {
  const wordRegex = /[^\W_]+/g;
  return str.match(wordRegex) || [];
}
