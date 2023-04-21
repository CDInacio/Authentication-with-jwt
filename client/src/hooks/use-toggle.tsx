import React, { useState } from "react";

const useToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePass = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return {
    showPassword,
    handleTogglePass,
    handleMouseDownPassword,
  };
};

export default useToggle;
