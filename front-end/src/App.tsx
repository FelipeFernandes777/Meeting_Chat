import { Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

function App() {

  const [authenticated, setAuthenticate] = useState(true);

  return (
    <section className="max-h-screen max-w-screen font-mono">
      {
        authenticated ? <Outlet /> : <LoginPage />
      }
    </section>
  )

}

export default App;
