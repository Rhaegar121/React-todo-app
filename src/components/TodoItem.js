import styles from "../styles/TodoItem.module.css";
import { useState } from "react";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      </div>
      <input type="text" value={itemProp.title} className={styles.textInput} style={editMode} onChange={(e) => setUpdate(e.target.value, itemProp.id)} />
    </li>
  );
};
export default TodoItem;
