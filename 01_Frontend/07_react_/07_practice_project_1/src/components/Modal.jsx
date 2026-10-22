import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import NewProjectButton from "./NewProjectButton";
export default function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="fixed top-1/2 left-1/2 m-0 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md bg-green-200 p-4 shadow-md backdrop:bg-stone-900/90" ref={dialog}>
      {children}
      <form className="mt-4 text-right" method="dialog">
        <NewProjectButton>{buttonCaption}</NewProjectButton>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}