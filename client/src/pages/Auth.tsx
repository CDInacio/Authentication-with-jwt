import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullname: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Informe um email válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "A senha precisa ter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const inputStl = "border-[1px] w-full  px-3 py-2 rounded-md mb-5 duration-300";

const Auth = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const handleTogglePass = () => {
    setTogglePassword((prev) => !prev);
  };

  const handleToggleConfPass = () => {
    setToggleConfirmPassword((prev) => !prev);
  };

  const [authMode, setAuthMode] = useState("Login");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="bg-card rounded-md p-5 w-[500px]">
      <h2 className="mb-5 font-bold text-2xl text-[#0f4c5c] text-center">
        {authMode === "login" ? "LOGIN" : "CADASTRO"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          type="text"
          className={`${inputStl} ${
            errors.fullname && "border-[1px] border-red-400"
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
              className="absolute right-5 top-[24%]"
            />
          ) : (
            <IoMdEyeOff
              onClick={handleTogglePass}
              className="absolute right-5 top-[24%]"
            />
          )}
        </div>
        <p className="text-red-400">{errors.fullname?.message}</p>
        <div className="relative">
          <input
            type={toggleConfirmPassword ? "text" : "password"}
            className={`${inputStl} ${
              errors.confirmPassword && "border-[1px] border-red-400"
            }`}
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
          {toggleConfirmPassword ? (
            <IoMdEye
              onClick={handleToggleConfPass}
              className="absolute right-5 top-[24%]"
            />
          ) : (
            <IoMdEyeOff
              onClick={handleToggleConfPass}
              className="absolute right-5 top-[24%]"
            />
          )}
        </div>
        <p className="text-red-400">{errors.confirmPassword?.message}</p>
        <input
          className="bg-red-400 p-3 rounded-md text-white cursor-pointer hover:bg-red-500 duration-300"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Auth;
