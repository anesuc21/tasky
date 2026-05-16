import { useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {

  const taskRef = useRef(null);

  const handleReset = () => {
    taskRef.current.value = "";
    setTasks([]);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!taskRef.current.value.trim()) return;

    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: false
    };

    setTasks([...tasks, task]);

    taskRef.current.value = "";
  };

  return (
    <section className="addtask">

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-4"
      >

        <label htmlFor="task" className="font-semibold">
          Task Name
        </label>

        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
          className="p-2 border rounded-lg shadow-sm"
        />

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-lg text-sm px-5 py-2.5"
        >
          Add Task
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-lg text-sm px-5 py-2.5"
        >
          Clear All
        </button>

      </form>

    </section>
  );
};