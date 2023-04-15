import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-neutral-100 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Container;
