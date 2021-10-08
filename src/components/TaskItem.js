export const TaskItem = ({ isCompleted, taskName, onTaskChange }) => {
  const styleOfTheComponent = {
    textDecoration: isCompleted ? "line-through" : "",
  };

  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onTaskChange}
        ></input>
        <span style={styleOfTheComponent}>{taskName}</span>
      </li>
    </div>
  );
};
