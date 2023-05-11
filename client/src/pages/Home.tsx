import { useContext } from "react";
import { useQuery } from "react-query";

import { ITaskResponse } from "../@types";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Layout/Container";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/api";

async function getTasks(): Promise<ITaskResponse[]> {
  const response = await api.get("/task");
  return response.data;
}

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return (
    <>
      <Navbar />
      <Container className="h-full bg-veryDark ">
        {data?.map((item) => (
          <p>{item.author.email}</p>
        ))}
      </Container>
    </>
  );
};

export default Home;
