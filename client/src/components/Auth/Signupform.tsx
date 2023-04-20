import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import useToggle from "../../hooks/use-toggle";
import { signupSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof signupSchema>;

const inputStl = "border-[1px] w-full  px-3 py-2 rounded-md mb-5 duration-300";

const Signupform = () => {
  const navigate = useNavigate();
  const { user, signup } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    handleToggleConfPass,
    handleTogglePass,
    toggleConfPass,
    togglePassword,
  } = useToggle();

  const handleNavigate = (to: string) => {
    navigate("/" + to);
  };

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(signupSchema) });

  const onSubmit = async (data: FormData) => {
    reset();
    setError("");

    const credentials = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };

    const response = await signup(credentials);

    if (response.status !== 200) {
      setError(response.data.message);
      return;
    }

    navigate("/login");
  };

  return (
    <div className="bg-card shadow-md rounded-md p-5 w-[500px]">
      <h2 className="mb-5 font-bold text-2xl text-[#0f4c5c] text-center">
        CADASTRO{" "}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          type="text"
          className={`${inputStl} ${
            errors.email && "border-[1px] border-red-400"
          }`}
          placeholder="Nome completo"
          {...register("fullname")}
        />
        <p className="text-red-400">{errors.fullname?.message}</p>
        <input
          type="text"
          className={`${inputStl} ${
            errors.email && "border-[1px] border-red-400"
          }`}
          placeholder="Email"
          {...register("email")}
        />
        <p className="text-red-400">{errors.email?.message}</p>
        <div className="relative">
          <input
            type={togglePassword ? "text" : "password"}
            className={`${inputStl} ${
              errors.password && "border-[1px] border-red-400"
            }`}
            placeholder="Senha"
            {...register("password")}
          />
          {togglePassword ? (
            <IoMdEye
              onClick={handleTogglePass}
              className="absolute right-5 top-[24%] cursor-pointer"
            />
          ) : (
            <IoMdEyeOff
              onClick={handleTogglePass}
              className="absolute right-5 top-[24%] cursor-pointer"
            />
          )}
        </div>
        <p className="text-red-400">{errors.password?.message}</p>
        <div className="relative">
          <input
            type={toggleConfPass ? "text" : "password"}
            className={`${inputStl} ${
              errors.password && "border-[1px] border-red-400"
            }`}
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
          {toggleConfPass ? (
            <IoMdEye
              onClick={handleToggleConfPass}
              className="absolute right-5 top-[24%] cursor-pointer"
            />
          ) : (
            <IoMdEyeOff
              onClick={handleToggleConfPass}
              className="absolute right-5 top-[24%] cursor-pointer"
            />
          )}
        </div>
        <p className="text-red-400">{errors.confirmPassword?.message}</p>
        <button
          className={` ${"bg-sky-400"} p-3 rounded-md text-white cursor-pointer hover:bg-sky-500 duration-300`}
          type="submit"
        >
          Enviar
        </button>
        <p className="text-center mt-3">
          Já possui uma conta?
          <span
            onClick={() => handleNavigate("login")}
            className="ml-1 font-bold cursor-pointer"
          >
            Entre
          </span>
        </p>
      </form>
      {error && <p className="text-center text-red-400 mt-5">{error}</p>}
    </div>
  );
};

export default Signupform;
