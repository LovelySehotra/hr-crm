import KanbanBoard from "./Kanban";


export default {
  component: KanbanBoard,
};

export const main = {
  args: {
   initialData:{  columns: [
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
     ]}
  },
};