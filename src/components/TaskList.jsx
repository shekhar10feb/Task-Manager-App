import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { UserContext } from "../context/UserContext";
import TaskItem from "./TaskItem";
import AddTaskForm from "./AddTaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const [category, setCategory] = useState("All");
  const [filtered, setFiltered] = useState([]);

  const { theme } = useContext(UserContext);

  // useEffect - filter tasks by category
  useEffect(() => {
    if (category === "All") setFiltered(tasks);
    else setFiltered(tasks.filter((t) => t.category === category));
  }, [category, tasks]);

  // useCallback - toggle task completion
  const handleAdd = useCallback((text, selectedCategory) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false, category: selectedCategory },
    ]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  // useMemo - expensive calculation
  const stats = useMemo(() => {
    const completed = tasks.filter((t) => t.completed).length;
    const pending = tasks.length - completed;
    return { completed, pending };
  }, [tasks]);

  return (
    <div className="p-4">
      <AddTaskForm onAdd={handleAdd} />
      <div className="flex gap-2 mb-2 md:mb-4">
        {["All", "Work", "Personal", "Study"].map((cat) => (
          <button
            key={cat}
            className={`p-1 md:p-2 text-xs md:text-sm rounded cursor-pointer ${
              category === cat ? "bg-blue-600 text-white" : "bg-yellow-500"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>
        {filtered.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </ul>

      <p
        className="mt-2 md:mt-4 text-gray-700 text-xs md:text-sm"
        style={{
          color: theme === "light" ? "rgb(4, 45, 142)" : "white",
        }}
      >
        ✅ Completed: {stats.completed} | ⏳ Pending: {stats.pending}
      </p>
    </div>
  );
};

export default TaskList;
