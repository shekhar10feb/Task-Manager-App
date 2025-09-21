import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const NotesPanel = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const { theme } = useContext(UserContext);

  const addNote = () => {
    if (!text.trim()) return;
    setNotes((prev) => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <div className="p-4 border-l md:text-sm">
      <h2 className="font-bold mb-2">Notes</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded mb-2 outline-none"
        placeholder="Write your notes..."
      />

      <button
        type="submit"
        className="font-bold text-white p-1 md:p-2 rounded cursor-pointer"
        onClick={addNote}
        style={{
          backgroundColor:
            theme === "light" ? "rgb(4, 45, 142)" : "rgb(6, 11, 19)",
        }}
      >
        Add Note
      </button>

      <ul className="mt-4">
        <h2>Your notes are here:</h2>
        {notes.map((n) => (
          <li key={n.id} className="border-b py-1">
            {n.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPanel;
