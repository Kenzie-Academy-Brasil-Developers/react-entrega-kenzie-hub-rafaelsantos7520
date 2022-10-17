import { StyledTechList } from "./index";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TechCard } from './TechCard/';

export const TechsList = () =>{
    const { userTechs } = useContext(UserContext);
    return(
        <StyledTechList>
        {userTechs.map((tech) => (
          <TechCard key={tech.id} tech={tech}/>
        ))}
      </StyledTechList>

    )

      
}

