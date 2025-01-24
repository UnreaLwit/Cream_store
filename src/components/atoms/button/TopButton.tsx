import React from "react";

export const TopButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className="hover:border-[#076e2f] hover:bg-[#076e2f] shadow-lg hover:shadow-lg mr-2 px-4 py-2 border rounded-md text-center text-sm hover:text-white transition-all active:scale-110">
      {children}
    </button>
  );
};
