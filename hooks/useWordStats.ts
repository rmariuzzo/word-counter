import { useEffect, useState } from "react";

type Stats = {
  words: string[];
  wordsTotal: number;
  topWords: [string, number][]
};

const defaultStats: Stats = {
  words: [],
  wordsTotal: 0,
  topWords: []
};

export const useWordStats = (input: string): Stats => {
  const [stats, setStats] = useState(defaultStats);
  useEffect(() => {
    const words = [...(input.toLowerCase().match(/\w+/g) ?? [])];
    const topWords = Array.from(
      words.reduce((map, word) => {
        map.set(word, (map.get(word) ?? 0) + 1);
        return map;
      }, new Map<string, number>())
    ).sort(([, a], [, b]) => b - a);

    setStats({
      words,
      wordsTotal: words.length,
      topWords
    });
  }, [input]);
  return stats;
};
