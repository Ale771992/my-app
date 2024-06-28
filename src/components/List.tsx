import React, { useEffect } from "react";
import { useStore } from "../hooks/useStore";
import Card from "./Card";
import axios from "axios";

const List: React.FC = () => {
  const { tasks, setTasks } = useStore();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTasks(response.data);
    });
  }, [setTasks]);

  return (
    <div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default List;