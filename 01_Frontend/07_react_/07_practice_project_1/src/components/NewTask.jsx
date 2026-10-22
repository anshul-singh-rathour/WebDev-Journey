import { useRef, useState } from "react";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";
export default function NewTask({ onAdd }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="my-4 text-xl font-bold text-green-950">Invalid Input</h2>
        <p className="mb-4 text-blue-950">Oops... looks like you forgot to enter a value .</p>
        <p className="mb-4 text-blue-950"> Please give a name to task.</p>
      </Modal>
      <div className="my-8 flex items-center justify-between">
        <input type="text" className="h-[5em] w-[50%] rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
        <ul>
          <Button label="Add Task" onClick={handleClick} />
        </ul>
      </div>
    </>
  );
}