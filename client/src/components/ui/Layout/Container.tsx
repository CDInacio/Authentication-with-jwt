import React from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  const style = twMerge("container mx-auto px-6", className);
  return <div className={style}>{children}</div>;
};

export default Container;
