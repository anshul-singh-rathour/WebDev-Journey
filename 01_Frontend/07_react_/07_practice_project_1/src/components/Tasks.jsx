import NewTask from "./NewTask.jsx";
import Button from "./Button.jsx";
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="mt-8 flex h-auto w-auto flex-col p-3">
      <h2 className="mb-4 text-4xl font-extrabold text-black [-webkit-text-stroke:0.5px_white]">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p className="my-4 text-green-950">This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <ul className="mt-8 flex flex-col rounded-md">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="my-2 flex w-full min-w-0 items-center justify-between rounded-2xl border-2 border-black bg-stone-100">
                <span className="min-w-0 flex-1 px-4 py-2 text-xl wrap-anywhere">{task.text}</span>

                <div className="shrink-0 py-3 pr-3">
                  <Button label="Clear" danger onClick={() => onDelete(task.id)} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
