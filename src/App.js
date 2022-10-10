import { RoutesMain } from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import { useState } from 'react';
import Global from "./components/styles/Global.js";

const App = () => {
  const [user , setUser] = useState(null);
  return(
    <main>
    <Global/>
    <ToastContainer theme="colored" autoClose={2000} />
    <RoutesMain 
    user={user}
    setUser={setUser}
    />
  </main>
  )

  };

export default App;
