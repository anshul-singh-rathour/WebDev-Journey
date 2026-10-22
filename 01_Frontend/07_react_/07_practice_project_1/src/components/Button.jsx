export default function Button({ label, danger, ...props }) {
  let classes = "mt-2 h-[3em] w-full rounded-md border border-3 border-black bg-stone-50 px-4 py-2 text-stone-700 hover:text-white";
  if (danger) {
    classes += " hover:bg-red-500";
  } else {
    classes += " hover:bg-stone-950 ";
  }
  return (
    <button {...props} className={classes}>
      {label}
    </button>
  );
}