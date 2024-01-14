import React from "react";

export const CustomButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className="gap-[15.6px] flex items-center justify-between 
            bg-themeGreen text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg
            transition-all hover:bg-opacity-80"
    >
      {children}
    </button>
  );
};

export default CustomButton;
