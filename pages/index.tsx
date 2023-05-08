import { useState } from "react";
import { useWordStats } from "@/hooks/useWordStats";
import { AppTitle } from "@/components/AppTitle";
import { InputField } from "@/components/InputField";
import Head from "next/head";
import { MetaTags } from "@/components/MetaTags";
import { StatsBlock } from "@/components/StatsBlock";

export default function Home() {
  const [input, setInput] = useState("");
  const stats = useWordStats(input);
  return (
    <>
      <Head>
        <title>Word Counter Tool</title>
        <MetaTags />
      </Head>
      <div className="h-screen bg-gradient-to-tl from-gray-100 via-blue-100 to-gray-100 flex flex-col gap-8 p-8">
        <AppTitle />
        <main className="flex-grow flex-shrink">
          <InputField
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </main>
        <footer className="flex flex-row gap-8">
          <StatsBlock>
            <strong className="block whitespace-nowrap">Words:</strong>
            <div>{stats.wordsTotal}</div>
          </StatsBlock>
          <StatsBlock>
            <strong className="block whitespace-nowrap">Unique Words:</strong>
            <div>{stats.uniqueWordsTotal}</div>
          </StatsBlock>
          <StatsBlock>
            <strong className="block whitespace-nowrap">Top Words:</strong>
            <div>
              {stats.wordsByCount.length > 0
                ? stats.wordsByCount
                    .slice(0, 50)
                    .map(([word, total]) => `${word} (${total})`)
                    .join(", ")
                : "-"}
            </div>
          </StatsBlock>
        </footer>
      </div>
    </>
  );
}
