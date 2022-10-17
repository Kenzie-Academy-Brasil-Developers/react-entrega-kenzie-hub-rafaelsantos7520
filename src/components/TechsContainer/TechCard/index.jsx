import { Headline, Titulo1 } from "../../styles/Textos";
import { StyledTechlI } from "./styled";

export const TechCard = ({ tech }) => {
  console.log(tech)
  return(
    <StyledTechlI>
      <Titulo1>{tech.title}</Titulo1>
      <Headline>{tech.status}</Headline>
    </StyledTechlI>
  ) 
};
