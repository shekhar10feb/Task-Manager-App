import TaskList from "../components/TaskList";
import NotesPanel from "../components/NotesPanel";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 md:col-span-2">
        <TaskList />
      </div>
      <div className="hidden md:flex">
        <NotesPanel />
      </div>
    </div>
  );
};

export default Dashboard;
