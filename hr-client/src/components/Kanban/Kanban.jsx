import React, { useState } from "react";
import "./kanban.css";

const initialData = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          title: "Design Homepage",
          description: "Create wireframes for the homepage layout",
          priority: "High",
          assignee: "Alice",
        },
        {
          id: "task-2",
          title: "Set Up Environment",
          description: "Install Node.js and necessary dependencies",
          priority: "Medium",
          assignee: "Bob",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-3",
          title: "Develop Login Feature",
          description: "Implement user authentication using JWT",
          priority: "High",
          assignee: "Charlie",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-4",
          title: "Set Up Database",
          description: "Configure MongoDB and create initial schema",
          priority: "Medium",
          assignee: "Diana",
        },
      ],
    },
  ],
};

function KanbanBoard() {
  const [data, setData] = useState(initialData);

  const onDragStart = (e, taskId, sourceColumnId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("sourceColumnId", sourceColumnId);
    const dragImage = e.target.cloneNode(true);
  dragImage.style.position = "absolute";
  dragImage.style.top = "-9999px"; // Place the drag image out of view
  dragImage.style.left = "-9999px";
  document.body.appendChild(dragImage);

    e.target.classList.add("dragging");
  };

  const onDrop = (e, targetColumnId) => {
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");
    

    if (sourceColumnId === targetColumnId) return;

    // Find source and target columns
    const sourceColumn = data.columns.find((col) => col.id === sourceColumnId);
    const targetColumn = data.columns.find((col) => col.id === targetColumnId);

    // Find task and update columns
    const task = sourceColumn.tasks.find((t) => t.id === taskId);
    const updatedSourceTasks = sourceColumn.tasks.filter((t) => t.id !== taskId);
    const updatedTargetTasks = [...targetColumn.tasks, task];

    const updatedColumns = data.columns.map((col) => {
      if (col.id === sourceColumnId) return { ...col, tasks: updatedSourceTasks };
      if (col.id === targetColumnId) return { ...col, tasks: updatedTargetTasks };
      return col;
    });

    setData({ ...data, columns: updatedColumns });
  };

  const onDragOver = (e) => e.preventDefault();
  const onDragEnd = (e) => {
    // Remove the 'dragging' class when dragging ends
    e.target.classList.remove("dragging");
    const hiddenImage = document.querySelector(".drag-image");
    if (hiddenImage) {
      document.body.removeChild(hiddenImage);
    }
  };
  return (
    <div className="kanban-board">
      {data.columns.map((column) => (
        <div
          key={column.id}
          className="kanban-column"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, column.id)}
        >
          <h2 className="column-title">{column.title}</h2>
          <div className="tasks">
            {column.tasks.map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={(e) => onDragStart(e, task.id, column.id)}
                onDragEnd={onDragEnd} // Add the dragEnd listener
              >
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>Assigned to: {task.assignee}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default KanbanBoard;
