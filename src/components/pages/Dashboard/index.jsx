import { NavBar } from "../../NavBar";
import logo from "../../../assets/img/Logo.png";
import { LinkContainer } from "../../Link";
import { Headline, Titulo1 } from "../../styles/Textos";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };
  

  useEffect(()=>{
    if(user === null){
      navigate("/");
    }
  })
  

  return (
    <>
      <NavBar>
        <img onClick={logout} src={logo} alt="logo kenzie hub" />
        <LinkContainer onClick={logout} rota="/">
          voltar
        </LinkContainer>
      </NavBar>
      <header>
        <Titulo1>ola,{user?.name}</Titulo1>
        <Headline>{user?.course_module}</Headline>
      </header>
      <Titulo1>Que pena! Estamos em desenvolvimento :( </Titulo1>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
    </>
  );
};
