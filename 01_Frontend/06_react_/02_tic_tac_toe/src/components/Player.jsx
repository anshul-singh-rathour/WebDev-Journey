import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  let editablePlayer = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    // setIsEditing(!isEditing); // => schedules a state update to true so never use instead use a function inside
    setIsEditing((editing) => !editing); // => false
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  if (isEditing) {
    editablePlayer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{editablePlayer}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
