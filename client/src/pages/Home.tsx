import { useContext } from "react";

import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "bold" }}>MY AUTH APP</Typography>
          <Button onClick={logout} sx={{ color: "#fff" }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h6" sx={{ mt: 10 }}>
          Seja Bem-vindo à sua home page, {user.name.split(" ")[0]}
        </Typography>
      </Container>
    </>
  );
};

export default Home;
