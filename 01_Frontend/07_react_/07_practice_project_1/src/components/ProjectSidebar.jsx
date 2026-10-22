import NewProjectButton from "./NewProjectButton";

export default function ProjectSidebar({ onStartAddProject, projects, projectSelect, selectedProjectId }) {
  return (
    <aside className="text-stone text-stone-50m h-screen w-auto min-w-[20%] rounded-r-xl bg-stone-900">
      <h2 className="m-8 font-bold text-stone-200 uppercase md:text-xl">Your Projects</h2>
      <div>
        <NewProjectButton onClick={onStartAddProject} children="+ Add Project" />
      </div>
      <ul className="mx-6 mt-10 flex flex-col gap-5">
        {projects.map((project) => {
          let classes = "w-full max-w-xs rounded-lg  px-4 py-2 text-center break-words whitespace-normal  hover:bg-green-600 hover:text-black";
          if (selectedProjectId === project.id) {
            classes += " bg-green-600 text-black ";
          } else {
            classes += " bg-green-800 text-white";
          }
          return (
            <li key={project.id}>
              <button className={classes} onClick={() => projectSelect(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}