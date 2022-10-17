import {createContext,useContext} from "react";
import { UserContext } from "./UserContext";

export const UserTechscontext = createContext({});

export const UserTechsProvider = ({children}) =>{
const [userTechs,setUserTechs] = useContext(UserContext);
console.log(userTechs)
return(
    <UserTechscontext.Provider value={{userTechs,setUserTechs}}>
        {children}
    </UserTechscontext.Provider>
)
}