import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Paper, Button, Typography, Container } from "@mui/material";
import * as yup from "yup";

import { AuthContext } from "../../context/AuthContext";
import BottomMessage from "../BottomMessage";
import AlertMessage from "../Feedback/AlertMessage";
import { signupSchema } from "./yupSchemas";

type FormData = yup.InferType<typeof signupSchema>;

const Signupform = () => {
  const navigate = useNavigate();
  const { signup, error, setError } = useContext(AuthContext);

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

    const credentials = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };

    const response = await signup(credentials);
    if (response.status === 200) navigate("/login");
  };

  useEffect(() => {
    setError("");
  }, [error]);

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
          CADASTRO
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              error={!!errors.fullname?.message}
              helperText={errors.fullname?.message}
              id="outlined-basic"
              label="Nome completo"
              variant="outlined"
              {...register("fullname")}
            />
          </div>
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
            text="Já possui uma conta?"
            subtext="Entre aqui"
            handleNavigate={handleNavigate}
            path="login"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default Signupform;
