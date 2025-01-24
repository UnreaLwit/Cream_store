import React from "react";

type TSortButtonProps = {
  children: React.ReactNode;
  callback: () => void;
};

export const SortButton: React.FC<TSortButtonProps> = ({
  children,
  callback,
}) => {
  return (
    <button
      onClick={callback}
      className="hover:border-[#076e2f] bg-[rgb(237,233,225)] hover:bg-[#076e2f] shadow-lg hover:shadow-lg m-4 mx-1 px-4 py-2 border border-black/40 rounded-md text-center text-sm hover:text-white transition-all active:scale-110"
    >
      {children}
    </button>
  );
};
