import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Form from "@radix-ui/react-form";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import useToggle from "../../hooks/use-toggle";
import Alert from "../ui/Alert/Alert";
import Card from "../ui/Card";
import { loginSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof loginSchema>;

const Loginform = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const { handleTogglePass, showPassword, handleMouseDownPassword } =
    useToggle();

  const handleNavigate = (to: string) => {
    navigate("/" + to);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: FormData) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };

    login(credentials);
  };

  useEffect(() => {
    if (user.isAuth) navigate("/");
  }, [user.isAuth]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className=" w-[1200px] h-[500px]  flex overflow-hidden bg-[#ffff]">
        <div className="relative flex items-center w-3/5">
          <img src="/images/login.jpg" className="object-cover brightness-75" />
          <div className="absolute left-0 right-0 flex flex-col items-center justify-center h-full mx-auto text-white">
            <h2 className="text-2xl">Novo aqui?</h2>
            <p className="text-center w-[80%] drop-shadow-sm text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              ab?
            </p>
            <button className="mt-[100px] px-[20px] h-[36px] rounded-md border-2 border-white">
              Criar conta
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-2/5 p-[50px] relative">
          {user.msg && (
            <Alert intent="danger" className="mb-[20px]">
              {user.msg}
            </Alert>
          )}
          <Form.Root onSubmit={handleSubmit(onSubmit)} className=" ">
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <div className="flex justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-neutral-800">
                    Email
                  </Form.Label>
                </div>
                <p className="text-xs text-red-400">
                  {errors?.email && errors.email.message}
                </p>
              </div>
              <Form.Control asChild>
                <input
                  {...register("email")}
                  className="box-border w-full bg-white shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-neutral-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
                  type="email"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="question">
              <div className="flex items-baseline justify-between">
                <div className="flex justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-neutral-800">
                    Senha
                  </Form.Label>
                </div>
                <p className="text-xs text-red-400">
                  {errors?.password && errors.password.message}
                </p>
              </div>
              <Form.Control asChild>
                <input
                  {...register("password")}
                  className={`box-border w-full bg-white shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-neutral-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none`}
                  type="password"
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button className="box-border w-full  shadow-blackA7 hover:bg-darkPurple inline-flex h-[35px] items-center justify-center rounded-[4px] bg-purlpe text-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                Entrar
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </Card>
    </div>
  );
};

export default Loginform;
