import { Headline, Titulo1 } from "../../styles/Textos";
import { StyledTechlI } from "./styled";
import { Button } from "./../../Button/index.jsx";
import imgLixeira from "../../../assets/img/imgLixeira.png";
import { UserTechscontext } from './../../../context/UserTechsContext';
import { useContext } from 'react';

export const TechCard = ({ tech }) => {
  const {deletarTech} = useContext(UserTechscontext);
  return (
    <StyledTechlI>
      <Titulo1>{tech.title}</Titulo1>
      <div>
        <Headline>{tech.status}</Headline>
        <Button onClick={()=>deletarTech(tech.id)} variant="buttonExcluirTech" type="buton">
          <img src={imgLixeira} alt="button delete" />
        </Button>
      </div>
    </StyledTechlI>
  );
};
