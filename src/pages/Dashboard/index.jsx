import { NavBar } from "../../components/NavBar";
import logo from "../../assets/img/Logo.png";
import { Headline, Titulo1 } from "../../components/styles/Textos";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "../../components/Button/index.jsx";
import { TechsList } from "../../components/TechsContainer/index";
import { Modal } from "../../components/Modals/ModalNewTechAdd/index";

export const Dashboard = () => {
  const { logout, loading, user } = useContext(UserContext);
  const [modalOpen, setOpenModal] = useState(false);

  if (loading) {
    return null;
  }

  return (
    <>
    
      <NavBar>
        <img src={logo} alt="logo kenzie hub" />
        <Button variant={"buttonMedium"} onClick={logout}>
          voltar
        </Button>
      </NavBar>
      <header>
        <Titulo1>ola, {user.name}</Titulo1>
        <Headline>{user.course_module}</Headline>
      </header>
      <div className="divContainerButtonTitulo">
        <Titulo1>Tecnologias</Titulo1>
        <Button onClick={() => setOpenModal(true)} variant={"buttonNewTech"}>
          +
        </Button>
        {modalOpen ? <Modal onClose={() => setOpenModal(false)} /> : null}
      </div>
      {loading ? <p>Buscando techs</p> : <TechsList />}
    </>
  );
};
