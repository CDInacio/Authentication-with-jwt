import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Paper, Button, Typography, Container } from "@mui/material";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import useToggle from "../../hooks/use-toggle";
import BottomMessage from "../BottomMessage";
import AlertMessage from "../Feedback/AlertMessage";
import { loginSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof loginSchema>;

const Loginform = () => {
  const navigate = useNavigate();
  const { user, login, error, setError } = useContext(AuthContext);

  // const { handleTogglePass, showPassword, handleMouseDownPassword } =
  //   useToggle();

  const handleNavigate = (to: string) => {
    navigate("/" + to);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: FormData) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };

    login(credentials);
  };

  useEffect(() => {
    setError("");
    if (user.isAuth) navigate("/");
  }, [user.isAuth]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: 550,
          marginX: "auto",
          paddingX: "50px",
          paddingY: "50px",
        }}
      >
        {error && (
          <AlertMessage message={error} color="error" severity="error" />
        )}
        <Typography variant="h5" mb={5} sx={{ fontWeight: "bold" }}>
          LOGIN
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email")}
            />
          </div>
          <div>
            {" "}
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              {...register("password")}
            />
          </div>
          <Button fullWidth sx={{ mb: 3 }} variant="contained" type="submit">
            Enviar
          </Button>

          <BottomMessage
            text="Não possui uma conta?"
            subtext="Cadastre-se"
            handleNavigate={handleNavigate}
            path="cadastro"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default Loginform;
