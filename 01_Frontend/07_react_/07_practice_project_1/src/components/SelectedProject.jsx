import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";
export default function SelectedProject({ project, onDelete, onDeleteTask, onAddTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="mt-16 h-auto w-auto max-w-[60%] rounded-2xl bg-green-700 p-12">
      <header className="mb-8 border-b-2 border-stone-50 p-3 pb-8">
        <div className="flex justify-between gap-6">
          <h1 className="mb-2 flex w-full min-w-0 text-6xl font-extrabold wrap-anywhere text-black [-webkit-text-stroke:2px_white]">{project.title}</h1>
          <ul>
            <Button label="Delete" danger onClick={onDelete} />
          </ul>
        </div>
        <p className="mt-4 mb-10 text-xl font-medium text-stone-300">{formattedDate}</p>
        <p className="flex w-full min-w-0 text-2xl wrap-anywhere whitespace-pre-wrap text-green-950">{project.description}</p>
      </header>
      <Tasks onDelete={onDeleteTask} onAdd={onAddTask} tasks={tasks} />
    </div>
  );
}