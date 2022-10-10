import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/pages/Dashboard";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";


export const RoutesMain = ({user,setUser}) => (
  <Routes>
    <Route path="/" element={<Login user={user} setUser={setUser} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/Dashboard" element={<Dashboard user={user} setUser={setUser} />} />
  </Routes>
);
