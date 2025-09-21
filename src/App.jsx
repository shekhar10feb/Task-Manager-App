import { useContext } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { UserContext } from "./context/UserContext";
import "./App.css";
import Register from "./components/Register";

function App() {
  const { user, theme } = useContext(UserContext);
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundColor: theme === "light" ? "#f3f4f6" : "rgb(57, 68, 82)",
        color: theme === "light" ? "#1f2937" : "#f3f4f6",
      }}
    >
      <Header />
      {!user ? <Register /> : <Dashboard />}
    </div>
  );
}

export default App;
