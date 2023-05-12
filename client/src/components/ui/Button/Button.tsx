import React, { ButtonHTMLAttributes } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: IconProp;
  className?: string;
}

const Button = ({ className, icon, children, ...props }: ButtonProps) => {
  const style = twMerge(
    "bg-primary-500 cursor-pointer hover:bg-primary-600 duration-300 h-[35px] px-[16px] rounded-md flex items-center justify-center",
    className
  );
  return (
    <button className={style} {...props}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-[5px]" />}
      {children}
    </button>
  );
};

export default Button;
