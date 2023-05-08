import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import Icon from "./Icon";

const alertStyles = cva("text-white rounded-md py-[5px] ", {
  variants: {
    intent: {
      success: ["bg-success"],
      danger: ["bg-danger"],
    },
  },
});

interface AlertProps extends VariantProps<typeof alertStyles> {
  children: React.ReactNode;
  className?: string;
}

const Alert = ({ children, intent, className }: AlertProps) => {
  return (
    <div className={alertStyles({ intent, className })}>
      <Icon className="px-[10px]" intent={intent} />
      {children}
    </div>
  );
};

export default Alert;
