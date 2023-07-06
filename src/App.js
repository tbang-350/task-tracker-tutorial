import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dental Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Head Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Leg Appointment",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    
    const id = Math.floor(Math.random() * 10000);

    const newTask = {id, ...task}

    console.log(newTask)

  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toogle Reminder
  const toogleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToogle={toogleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
