import { useState } from "react";
import "./App.css";
import { TaskItem } from "./components/TaskItem";

function App() {

  const [newTaskName, setNewTaskName] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };

  const handleTaskCreation = (event) => {
    event.preventDefault();
    createNewTask(newTaskName);
  }

  const handleNewTaskNameChange = (event) => {
    const value = event.target.value;
    setNewTaskName(value);
  }

  const createNewTask = (name) => {
    const arr = [...tasks];
    arr.push({isCompleted: false, taskName: name})
    setTasks(arr);
  }

  return (
    <main>
        <form onSubmit={handleTaskCreation}>
          <h2>Create a new task:</h2>
          <input type="text" placeholder="Task Name" value={newTaskName} onChange={handleNewTaskNameChange}></input>
          <button>create task</button>
        </form>
        <ul>
            {tasks.map((task, index) => {
              return (
                <TaskItem
                  isCompleted={task.isCompleted}
                  taskName={task.taskName}
                  onTaskChange={handleTaskChange(index)}
                />
              );
            })}
          </ul>
    </main>
  );
}

export default App;