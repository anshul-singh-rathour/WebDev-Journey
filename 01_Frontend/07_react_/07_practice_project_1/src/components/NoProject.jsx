import NoProjectImage from "../assets/no-projects.png";
import NewProjectButton from "./NewProjectButton.jsx";
export default function NoProject({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img src={NoProjectImage} alt="An empty task list" className="mx-auto h-16 w-16 object-contain" />
      <h2 className="my-4 text-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
      <section className="mt-8">
        <NewProjectButton onClick={onStartAddProject} children="Create new project" />
      </section>
    </div>
  );
}