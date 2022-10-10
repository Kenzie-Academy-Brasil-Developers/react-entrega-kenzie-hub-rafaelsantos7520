import { Link } from "react-router-dom";
import "./index.css"

export const LinkContainer = ({ classe, onClick, rota, children }) => (
  <Link className={classe} to={rota} onClick={onClick}>
    {children}
  </Link>
);
