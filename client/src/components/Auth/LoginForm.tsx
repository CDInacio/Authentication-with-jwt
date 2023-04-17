import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import useToggle from "../hooks/use-toggle";
import { loginSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof loginSchema>;

const inputStl = "border-[1px] w-full  px-3 py-2 rounded-md mb-5 duration-300";

const Loginform = () => {
  const navigate = useNavigate();
  const { login, state } = useContext(AuthContext);
  const { handleTogglePass, togglePassword } = useToggle();

  const handleNavigate = (to: string) => {
    navigate("/" + to);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: FormData) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };
    const res = await login(credentials);
    console.log(res.data.message);
  };

  useEffect(() => {
    if (state.user) navigate("/");
  }, [state.user]);

  return (
    <div className="bg-card shadow-md rounded-md p-5 w-[500px]">
      <h2 className="mb-5 font-bold text-2xl text-[#0f4c5c] text-center">
        LOGIN
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
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
        <button
          className="bg-sky-400 p-3 rounded-md text-white cursor-pointer hover:bg-sky-500 duration-300"
          type="submit"
        >
          Enviar
        </button>
        <p className="text-center mt-3">
          Não possui uma conta?
          <span
            onClick={() => handleNavigate("cadastro")}
            className="ml-1 font-bold cursor-pointer"
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </div>
  );
};

export default Loginform;
