export default function Input({ label, textarea, ref, ...props }) {
  const classes = "w-full rounded-sm border-b-2 border-stone-300 bg-white  p-1 text-stone-600 focus:border-stone-600 focus:border-2 ";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="font-bold text-black uppercase" htmlFor="">
        {label}{" "}
      </label>
      {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
    </p>
  );
}