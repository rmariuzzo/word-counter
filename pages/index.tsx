import { useState } from "react";
import { useWordStats } from "@/hooks/useWordStats";

export default function Home() {
  const [input, setInput] = useState("");
  const stats = useWordStats(input);
  return (
    <div className="h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 flex flex-col gap-8 p-8">
      <header className="text-4xl">Word Counter Tool</header>
      <main className="flex-grow flex-shrink">
        <textarea
          className="w-full h-full border-2 border-solid rounded border-gray-500 bg-gray-50 p-4"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></textarea>
      </main>
      <footer className="flex flex-row gap-8">
        <div>
          <strong className="block whitespace-nowrap">Words:</strong>
          <div>{stats.wordsTotal}</div>
        </div>
        <div>
          <strong className="block whitespace-nowrap">Unique Words:</strong>
          <div>{stats.uniqueWordsTotal}</div>
        </div>
        <div>
          <strong className="block whitespace-nowrap">Top Words:</strong>
          <div>
            {stats.wordsByCount.length > 0
              ? stats.wordsByCount
                  .slice(0, 50)
                  .map(([word, total]) => `${word} (${total})`)
                  .join(", ")
              : "-"}
          </div>
        </div>
      </footer>
    </div>
  );
}
