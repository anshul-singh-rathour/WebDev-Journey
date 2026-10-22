import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesciption = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === "" || enteredDesciption.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDesciption,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="my-4 text-xl font-bold text-green-950">Invalid Input</h2>
        <p className="mb-4 text-blue-950">Oops... looks like you forgot to enter a value .</p>
        <p className="mb-4 text-blue-950">Please make sure you provide a valid value for every input.</p>
      </Modal>
      <div className="flex h-auto w-auto min-w-[30%] flex-col rounded-2xl bg-green-700 p-4">
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        <menu className="m-0 flex w-full min-w-0 items-center justify-end gap-4 p-0">
          <li>
            <Button label="Cancel" onClick={onCancel} />
          </li>
          <li>
            <Button label="Save" onClick={handleSave} />
          </li>
        </menu>
      </div>
    </>
  );
}