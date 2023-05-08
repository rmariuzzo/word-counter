import { FC } from "react";

export const MetaTags: FC = () => {
  return (
    <>
      <meta name="title" content="Word Counter Tool" />
      <meta
        name="description"
        content="Online tool to count words for frequency, uniqueness and more."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://rmariuzzo.github.io/word-counter/"
      />
      <meta property="og:title" content="Word Counter Tool" />
      <meta
        property="og:description"
        content="Online tool to count words for frequency, uniqueness and more."
      />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://rmariuzzo.github.io/word-counter/"
      />
      <meta property="twitter:title" content="Word Counter Tool" />
      <meta
        property="twitter:description"
        content="Online tool to count words for frequency, uniqueness and more."
      />
      <meta property="twitter:image" content="" />
    </>
  );
};
