import { useContext } from "react";

import Navbar from "../components/Navbar";
import Container from "../components/ui/Layout/Container";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Container className="bg-veryDark h-full ">dasd</Container>
    </>
  );
};

export default Home;
