import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userTechs,setUserTechs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  
  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      window.localStorage.setItem("@TOKEN", response.data.token);
      const toLocation = location.state?.from.pathname || "Dashboard";
      setUser(response.data.user);
      navigate(toLocation);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    async function getProfile() {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const { data } = await api.get("profile");
          setUser(data);
          setUserTechs(data.techs)

          
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }
      setLoading(false);
      
    }
    getProfile();
  }, []);
 
  

  const userRegister = async (data, setLoading) => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("users", data);
      toast.success("Cadastro realizado com Sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{ user, userLogin, userRegister, logout, loading, userTechs}}
    >
      {children}
    </UserContext.Provider>
  );
};
