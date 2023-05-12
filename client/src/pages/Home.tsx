import { useContext } from "react";

import Doing from "../components/Board/Doing";
import Done from "../components/Board/Done";
import Todo from "../components/Board/Todo";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Layout/Container";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Container className="h-full bg-veryDark ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          <Todo />
          <Doing />
          <Done />
        </div>
      </Container>
    </>
  );
};

export default Home;
