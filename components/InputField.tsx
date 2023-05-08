import { FC } from "react";

export const InputField: FC<JSX.IntrinsicElements["textarea"]> = (props) => {
  return (
    <textarea
      className="font-light w-full h-full border-2 border-solid rounded border-gray-500 bg-gray-50 p-4 resize-none"
      spellCheck={false}
      placeholder="Paste some text..."
      {...props}
    ></textarea>
  );
};
