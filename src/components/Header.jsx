import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { MdLightbulbCircle } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const { user, login, theme, toggleLogout, toggleTheme } =
    useContext(UserContext);

  return (
    <header
      className="w-full flex justify-between p-2 md:p-4 text-white"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(4, 45, 142)" : "rgb(6, 11, 19)",
      }}
    >
      <h1 className="w-1/2 text-sm sm:text-lg md:text-xl font-bold text-yellow-400">
        Task Manager
      </h1>
      <div className="w-1/2 flex justify-end items-center mx-3">
        {!user ? "" : <span className="mx-1 hidden md:flex">Welcome, {user}</span>}
        {!login ? (
          ""
        ) : (
          <button
            className=" hidden md:flex text-white mx-4 cursor-pointer"
            onClick={toggleLogout}
          >
            Logout
          </button>
        )}
        <button
          className="flex justify-center items-center bg-none text-blue-600 px-3 py-1 rounded cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MdDarkMode className="inline scale-[2] font-bold text-yellow-400" />
          ) : (
            <MdLightbulbCircle className="inline scale-[2] font-bold text-yellow-400" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
