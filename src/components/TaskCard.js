import "./taskCard.css";

export const TaskCard = (props) => {

  return (

    <li className={`taskcard ${props.task.completed ? "completed" : "incomplete"}`}>

      <span className="inline-block bg-white p-3 shadow w-4/6 rounded-lg m-3">
        <span className="font-bold">
          Id {props.task.id}
        </span>
        <span>
          {" "} - {props.task.name}
        </span>
      </span>

        <button
          onClick={() => props.handleToggle(props.task.id)}
          className={`text-white font-medium rounded-lg text-sm px-5 py-2.5
          ${props.task.completed
            ? "bg-yellow-500"
            : "bg-green-600"
          } m-3`}
        >
          {props.task.completed ? "Pending" : "Completed"}
        </button>

        <button
          onClick={() => props.handleDelete(props.task.id)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-lg text-sm px-5 py-2.5"
        >
          Delete
        </button>

    </li>
  );
};