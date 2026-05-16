import { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./taskList.css";

export const TaskList = ({ tasks, setTasks }) => {

  const [filter, setFilter] = useState("all");

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleToggle(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter(task => {

    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  return (
    <section className="tasklist">
      <div className="mb-5">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </section>
  );
};