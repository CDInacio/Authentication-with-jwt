import { useContext } from "react";

import Container from "../components/ui/Layout/Container";
import Modal from "../components/ui/Modal";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="w-screen h-[60px] text-white bg-dark shadow-md flex items-center justify-center">
        <Container className="flex justify-between">
          <p>Quadro Kanban</p>
          <Modal />
        </Container>
      </nav>
      <Container className="bg-veryDark h-full ">dasd</Container>
    </>
  );
};

export default Home;
