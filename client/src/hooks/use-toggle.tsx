import React, { useState } from "react";

const useToggle = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfPass, setToggleConfPass] = useState(false);

  const handleTogglePass = () => {
    setTogglePassword((prev) => !prev);
  };

  const handleToggleConfPass = () => {
    setToggleConfPass((prev) => !prev);
  };

  return {
    togglePassword,
    toggleConfPass,
    handleToggleConfPass,
    handleTogglePass,
  };
};

export default useToggle;
