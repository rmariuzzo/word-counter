import { FC, PropsWithChildren } from "react";

export const StatsBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-4 rounded-md border-solid border-slate-400 px-4 py-2 shadow-sm bg-gradient-to-br from-slate-50 to-slate-100">
      {children}
    </div>
  );
};
