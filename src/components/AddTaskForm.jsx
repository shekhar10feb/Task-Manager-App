import { useCallback, useRef, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [taskcategory_for_input_form, setTaskCategory_for_input_form] =
    useState("Work");

  const { user, login, theme, toggleLogout } =
    useContext(UserContext);

  const inputRef = useRef();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!task.trim() && !taskcategory_for_input_form.trim()) return;

      onAdd(task, taskcategory_for_input_form);
      setTask("");
      setTaskCategory_for_input_form("Work");
      inputRef.current.focus();
    },
    [task, taskcategory_for_input_form, onAdd]
  );

  return (
    <section className="flex flex-col gap-2 p-2 px-0 text-xs md:text-sm">
      <div className="w-full flex justify-between items-center">
        <span
          className="hidden md:flex font-semibold"
          style={{
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          Add your task here!
        </span>
        {!user ? (
          ""
        ) : (
          <span
            className=" flex md:hidden font-semibold"
            style={{
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            Welcome {user}, add your task here!
          </span>
        )}
        {!login ? (
          ""
        ) : (
          <button
            className=" flex md:hidden cursor-pointer text-white px-2 py-1 rounded-md border-none"
            onClick={toggleLogout}
            style={{
              backgroundColor:
                theme === "light" ? "rgb(4, 45, 142)" : "rgb(6, 11, 19)",
            }}
          >
            Logout
          </button>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 md:gap-2 p-2 md:p-4 px-0 md:px-0"
      >
        <label htmlFor="taskInput">Write your text input here:</label>
        <input
          type="text"
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="AddTaskForm"
          className="border p-1 md:p-2 flex-1 rounded outline-none"
          name="taskInput"
          id="taskInput"
        />
        <label htmlFor="category" className="mt-2 md:mt-4">
          Select your category:
        </label>
        <select
          className={`w-full border ${
            theme === "light"
              ? "border-black text-white"
              : "border-white text-black"
          } rounded p-1 md:p-2 cursor-pointer outline-none`}
          value={taskcategory_for_input_form}
          onChange={(e) => setTaskCategory_for_input_form(e.target.value)}
          name="category"
          id="category"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "rgb(57, 68, 82)",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button
          type="submit"
          className="font-bold text-white p-1 md:p-2 mt-2 md:mt-4 rounded cursor-pointer"
          style={{
            backgroundColor:
              theme === "light" ? "rgb(4, 45, 142)" : "rgb(6, 11, 19)",
          }}
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTaskForm;
