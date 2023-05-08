import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={` shadow-lg rounded-md  ${className}`}>{children}</div>
  );
};

export default Card;
