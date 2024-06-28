import React from "react";

interface CardProps {
  id: number;
  title: string;
  completed: boolean;
}

const Card: React.FC<CardProps> = ({ id, title, completed }) => {
  return (
    <div
      style={{
        backgroundColor: completed ? "lightgreen" : "lightcoral",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{title}</h3>
      <p>ID: {id}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
};
export default Card
