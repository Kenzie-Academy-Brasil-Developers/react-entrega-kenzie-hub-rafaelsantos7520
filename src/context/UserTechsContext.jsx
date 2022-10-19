import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserTechscontext = createContext({});

export const UserTechsProvider = ({ children }) => {
  const { userTechs, setUserTechs } = useContext(UserContext);

  const cadastrarTech = async (data, setLoading, onClose) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data);
      toast.success("Tecnlogia cadastrada com sucesso");
      const newTechsList = [
        ...userTechs,
        {
          id: response.data.id,
          title: response.data.title,
          status: response.data.status,
        },
      ];
      setUserTechs(newTechsList);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const deletarTech = async (techId) => {
    const newTechsList = userTechs.filter((tech) => tech.id !== techId);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.delete(`users/techs/${techId}`);
      toast.success("Tecnlogia Deletada com sucesso");
      setUserTechs(newTechsList);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <UserTechscontext.Provider
      value={{
        userTechs,
        setUserTechs,
        cadastrarTech,
        deletarTech,
      }}
    >
      {children}
    </UserTechscontext.Provider>
  );
};
