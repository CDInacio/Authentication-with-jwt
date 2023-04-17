import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Add from "./components/Add";
import Kanban from "./components/Kanban/Kanban";
import { AuthContext } from "./context/AuthContext";

function App() {
  const navigate = useNavigate();
  const { state, logout } = useContext(AuthContext);

  const handleNavigate = (to: string) => {
    navigate("/" + to);
  };
  
  return (
    <>
      <p onClick={() => handleNavigate("login")}>login</p>
      <p onClick={() => handleNavigate("cadastro")}>casdastro</p>
      <Add />
      <Kanban />
      <p onClick={logout}>logout</p>
    </>
  );
}

export default App;
