import { useEffect, useState } from "react";
import { countWords } from "../utils/countWords";
import { getWords } from "../utils/getWords";

type Stats = {
  wordsTotal: number;
  uniqueWordsTotal: number;
  wordsByCount: [string, number][]
};

const defaultStats: Stats = {
  wordsTotal: 0,
  uniqueWordsTotal: 0,
  wordsByCount: []
};

export const useWordStats = (input: string): Stats => {
  const [stats, setStats] = useState(defaultStats);
  useEffect(() => {
    const words = getWords(input);
    const wordsTotal = words.length
    const wordsCount = countWords(words);
    const uniqueWordsTotal = Object.keys(wordsCount).length
    const wordsByCount = Object.entries(wordsCount).sort(([, a], [, b]) => b - a);

    setStats({
      wordsTotal,
      uniqueWordsTotal,
      wordsByCount
    });
  }, [input]);
  return stats;
};
