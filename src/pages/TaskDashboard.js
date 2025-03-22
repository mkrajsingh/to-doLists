// TaskDashboard.js - main app after login
import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import "./Dashboard.css";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Interview with Design Team",
      date: "Today",
      status: "TO-DO",
    },
    { id: 2, title: "Team Meeting", date: "30 Dec, 2024", status: "TO-DO" },
    {
      id: 3,
      title: "Design a Dashboard page along with wireframes",
      date: "31 Dec, 2024",
      status: "TO-DO",
    },
    { id: 4, title: "Morning Workout", date: "Today", status: "IN-PROGRESS" },
    { id: 5, title: "Code Review", date: "Today", status: "IN-PROGRESS" },
    {
      id: 6,
      title: "Update Task Tracker",
      date: "25 Dec, 2024",
      status: "IN-PROGRESS",
    },
    {
      id: 7,
      title: "Submit Report",
      date: "24 Dec, 2024",
      status: "COMPLETED",
    },
  ]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  return (
    <div className="dashboard">
      <h2>TaskBuddy</h2>
      <FilterBar />
      <AddTaskForm onAdd={addTask} />
      <div className="task-sections">
        <TaskList tasks={tasks} status="TO-DO" />
        <TaskList tasks={tasks} status="IN-PROGRESS" />
        <TaskList tasks={tasks} status="COMPLETED" />
      </div>
    </div>
  );
};

export default TaskDashboard;
