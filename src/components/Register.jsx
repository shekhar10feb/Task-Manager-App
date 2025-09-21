import { useContext, useRef, useCallback, useState } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { setUser, setLogin, setMail, theme } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [e_mail, setE_mail] = useState("");

  const inputRef = useRef();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!username.trim()) return;
      setUser(username);
      setMail(e_mail);
      setE_mail("");
      setUsername("");
      setLogin(true);
      inputRef.current.focus();
    },
    [username]
  );
  return (
    <div
      className="w-full min-h-screen fixed flex flex-col items-center justify-center"
      style={{
        backgroundColor: theme === "light" ? "rgb(221, 221, 221)" : "#1f2937",
        color: theme === "light" ? "#1f2937" : "#f3f4f6",
      }}
    >
      <section
        className="w-4/5 md:w-2/5 flex justify-between items-center flex-col rounded shadow-lg p-2 md:p-4 py-3 sm:py-4 md:py-6 gap-2 md:gap-4"
        style={{
          backgroundColor: theme === "light" ? "#f3f4f6" : "rgb(57, 68, 82)",
          color: theme === "light" ? "#1f2937" : "#f3f4f6",
        }}
      >
        <h1 className="w-4/5 flex text-start text-sm sm:text-lg md:text-xl font-bold">Register</h1>
        <form onSubmit={handleSubmit} className="w-4/5 flex flex-col gap-4">
          <input
            type="text"
            ref={inputRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="border p-1 px-2 md:p-2 flex-1 text-sm md:text-lg rounded outline-none"
          />
          <input
            type="email"
            value={e_mail}
            onChange={(e) => setE_mail(e.target.value)}
            placeholder="Enter your email"
            className="border p-1 px-2 md:p-2 flex-1 text-sm md:text-lg rounded outline-none"
          />
          <button
            type="submit"
            className="font-bold text-white text-sm md:text-lg p-1 md:p-2 rounded cursor-pointer"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(4, 45, 142)" : "rgb(6, 11, 19)",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
