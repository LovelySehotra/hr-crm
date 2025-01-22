import React, { useState } from "react";
import "./DragDrop.css";

const TaskManagement = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [tasks, setTasks] = useState({
    todo: [
      { id: "todotarget1", text: "Details of Task", project: "Project Name One" },
      { id: "todotarget2", text: "Details of Task", project: "Project Name two" },
      { id: "todotarget3", text: "Details of Task", project: "Project Name three" },
      { id: "todotarget4", text: "Details of Task", project: "Project Name four" },
      { id: "todotarget5", text: "Details of Task", project: "Project Name five" },
    ],
    progress: [
      { id: "inprogresstarget1", text: "Details of Task", project: "Project Name" },
      { id: "inprogresstarget2", text: "Details of Task", project: "Project Name" },
    ],
    completed: [
      { id: "completedtarget1", text: "Details of Task", project: "Project Name" },
    ],
  });

  const [removingTaskId, setRemovingTaskId] = useState(null);

  const onDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", taskId);
    event.dataTransfer.effectAllowed = "move";
    // event.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const onDrop = (event, category) => {
    event.preventDefault();
    // event.dataTransfer.dropEffect = "move";
    const taskId = event.dataTransfer.getData("taskId");

    const sourceCategory = Object.keys(tasks).find((key) =>
      tasks[key].some((task) => task.id === taskId)
    );

    const task = tasks[sourceCategory].find((task) => task.id === taskId);

    setRemovingTaskId(taskId); // Set the task to be removed for animation
    setTimeout(() => {
      // Update tasks after the animation
      setTasks((prevState) => {
        const updatedSource = prevState[sourceCategory].filter(
          (task) => task.id !== taskId
        );

        return {
          ...prevState,
          [sourceCategory]: updatedSource,
          [category]: [...prevState[category], task],
        };
      });

      setRemovingTaskId(null); // Reset the removing state
    }, 300); // Match the CSS transition duration
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <section className="task-section">
      
      <h5 className="section-title">Task Management (Drag and Drop)</h5>
      <div className="container">
        <div className="task-wrapper">
          {Object.keys(tasks).map((category) => (
            <div
              key={category}
              className={`task-category ${category}`}
              id={category}
              onDrop={(event) => onDrop(event, category)}
              onDragOver={allowDrop}
            >
              <h5 className="category-title">{category.toUpperCase()}</h5>
              <div className="tasks-container">
                {tasks[category].map((task) => (
                  <div
                    key={task.id}
                    id={task.id}
                    draggable="true"
                    onDragStart={(event) => onDragStart(event, task.id)}
                    className={`task-card ${category} ${removingTaskId === task.id ? "removing" : ""
                      }`}
                  >
                    <div className="task-card-body">
                      <div className="task-text">{task.text}</div>
                      <div className={`task-project ${category}`}>{task.project}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskManagement;
