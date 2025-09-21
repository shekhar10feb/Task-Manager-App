import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [login, setLogin] = useState(false);

  const [theme, setTheme] = useState("light");

  const toggleLogout = () => {
    setLogin(!login);
    setUser(!user);
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        setLogin,
        theme,
        toggleLogout,
        toggleTheme,
        mail,
        setMail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
