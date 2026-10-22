export default function NewProjectButton({ children, ...props }) {
  return (
    <div>
      <button className="rounded-md bg-stone-700 px-4 py-2 text-xs text-stone-300 hover:bg-stone-500 hover:text-stone-200 md:text-base" {...props}>
        {children}
      </button>
    </div>
  );
}