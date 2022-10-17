import { RoutesMain } from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import Global from "./components/styles/Global.js";
import { UserProvider } from "./context/UserContext";
import {UserTechsProvider} from "./context/UserTechsContext"

const App = () => {
  return (
    <main>
      <Global />
      <ToastContainer theme="colored" autoClose={2000} />
      <UserProvider>
        {/* <UserTechsProvider> */}
          <RoutesMain />
        {/* </UserTechsProvider> */}
      </UserProvider>
    </main>
  );
};

export default App;
