const TaskItem = ({ task, onToggle }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.text}
      </span>
      <button
        className="bg-green-500 text-white px-2 rounded"
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? "Undo" : "Done"}
      </button>
    </li>
  );
};

export default TaskItem;
