import React, { useState } from "react";
import { useStore } from '../hooks/useStore'

const AddItem: React.FC = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const addTask = useStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
        id: Math.random(),
        title, 
        completed,
    }
    addTask(newTask);
    setTitle('');
    setCompleted(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};
export default AddItem