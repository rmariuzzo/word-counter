export function countWords(words: string[]): Record<string, number> {
  const counts: Record<string, number> = {};

  words.forEach((str) => {
    const lowercaseStr = str.toLowerCase();
    counts[lowercaseStr] = (counts[lowercaseStr] || 0) + 1;
  });

  return counts;
}
