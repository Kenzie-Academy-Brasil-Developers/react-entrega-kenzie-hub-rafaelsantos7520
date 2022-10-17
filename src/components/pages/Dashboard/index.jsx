import { NavBar } from "../../NavBar";
import logo from "../../../assets/img/Logo.png";
import { Headline, Titulo1 } from "../../styles/Textos";
import { UserContext } from "./../../../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "../../Button/index.jsx";
import { TechsList } from "../../TechsContainer/index.jsx";
import { Modal } from './../../Modal/index';

export const Dashboard = () => {
  const { logout, loading, user } = useContext(UserContext);
  const [modalOpen,setOpenModal] = useState(false);



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
        <Titulo1>ola,{user.name}</Titulo1>
        <Headline>{user.course_module}</Headline>
      </header>
      <div className="divContainerButtonTitulo">
        <Titulo1>Tecnologias</Titulo1>
        <Button onClick={()=> setOpenModal(true)} variant={"buttonNewTech"}>+</Button>
        {modalOpen? 
        <Modal onClose={()=> setOpenModal(false)} /> : null 
      }
      </div>
      <TechsList/>
    </>
  );
};
