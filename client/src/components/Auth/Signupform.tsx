import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import { signupSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof signupSchema>;

const Signupform = () => {
  const navigate = useNavigate();
  const { user, signup, setUser } = useContext(AuthContext);

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

  const onSubmit = (data: FormData) => {
    reset();

    const credentials = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };

    signup(credentials);
  };

  useEffect(() => {
    setUser((prev) => ({ ...prev, msg: "", status: 401 }));

    if (user.status === 200) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user.status]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="">
        <input
          {...register("fullname")}
          type="text"
          placeholder="Nome completo"
        />
        <input {...register("email")} type="email" placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Signupform;
