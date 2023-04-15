import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, label, type, placeholder, ...props }: InputProps) => {
  const { register } = useFormContext();
  const [togglePassword, setTogglePassword] = useState(false);

  const handleToggle = () => {
    setTogglePassword((prev) => !prev);
  };

  return (
    <label className="flex flex-col">
      <p className="font-bold text-neutral-600 mb-1">{label}</p>
      <div className="relative">
        <input
          {...register(name)}
          type={
            type === "password" ? (togglePassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="border-[1px] w-full border-neutral-200 focus:border-neutral-400 px-3 py-2 rounded-md mb-5 duration-300"
        />
        {type === "password" ? (
          togglePassword ? (
            <IoMdEyeOff
              onClick={handleToggle}
              className="absolute top-[22%] right-3 text-neutral-600 cursor-pointer"
              size={20}
            />
          ) : (
            <IoMdEye
              onClick={handleToggle}
              className="absolute top-[22%] right-3 text-neutral-600 cursor-pointer"
              size={20}
            />
          )
        ) : null}
      </div>
    </label>
  );
};

export default Input;
