import React from "react";

export const BottomButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className="flex justify-center items-center hover:bg-[#D2F179] shadow-lg m-2 p-2 border border-black/50 rounded-full w-10 h-10 transition-all active:scale-110">
      {children}
    </button>
  );
};
