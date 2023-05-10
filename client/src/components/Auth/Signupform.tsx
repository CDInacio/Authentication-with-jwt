import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Form from "@radix-ui/react-form";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import Card from "../ui/Card";
import { signupSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof signupSchema>;

const Signupform = () => {
  const navigate = useNavigate();
  const { user, signup, setUser } = useContext(AuthContext);

  const handleNavigate = (to: string) => {};

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
    <div className="flex items-center justify-center h-screen">
      <Card className=" w-[1200px] h-[500px]  flex overflow-hidden bg-[#ffff]">
        <div className="relative flex items-center w-3/5">
          <img
            src="/images/signup.jpg"
            className="object-cover brightness-75"
          />
          <div className="absolute left-0 right-0 flex flex-col items-center justify-center h-full mx-auto text-white">
            <h2 className="text-2xl">Já possui uma conta?</h2>
            <p className="text-center w-[80%] drop-shadow-sm text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              ab?
            </p>
            <button
              onClick={() => navigate("/login")}
              className="mt-[100px] px-[20px] h-[36px] rounded-md border-2 border-white"
            >
              Entre aqui
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-2/5 p-[50px] relative">
          {/* {user.msg && (
            <Alert intent="danger" className="mb-[20px]">
              {user.msg}
            </Alert>
          )} */}
          <h2 className="text-3xl font-medium text-neutral-800 mb-[30px]">
            Cadastro
          </h2>
          <Form.Root onSubmit={handleSubmit(onSubmit)} className=" ">
            <Form.Field className="grid mb-[10px]" name="fullname">
              <div className="flex items-baseline justify-between">
                <div className="flex justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-neutral-800">
                    Nome completo
                  </Form.Label>
                </div>
                <p className="text-xs text-red-400">
                  {errors?.fullname && errors.fullname.message}
                </p>
              </div>
              <Form.Control asChild>
                <input
                  {...register("fullname")}
                  className="box-border w-full bg-white shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-neutral-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
                  type="text"
                />
              </Form.Control>
            </Form.Field>
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
              <button className="box-border w-full  shadow-blackA7 hover:bg-primary-600 bg-primary-500 duration-300 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-purlpe text-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                Cadastrar
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </Card>
    </div>
  );
};

export default Signupform;
