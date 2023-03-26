import { StyledDashboard } from "./styles";
import { UserContext } from "../../Context/UserContext";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Techlist from "../../Components/ContactList";
import ModalContainer from "../../Components/ModalContainer";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(undefined);
    navigate(`/login`);
  };

  return (
    <>
      <Header>
        <Button medium variant onClick={() => logout()}>
          Sair
        </Button>
      </Header>
      {user && (
        <>
          <ModalContainer />
          <StyledDashboard>
            <div className="div--greetings ">
              <h2>Olá, {user.name}!</h2>
              <p>{user.username}</p>
            </div>
            <Techlist />
          </StyledDashboard>
        </>
      )}
    </>
  );
};

export default Dashboard;
