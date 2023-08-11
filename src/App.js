import React from "react";

import "./App.css";
import "./components/GoalList";
import GoalList from "./components/GoalList";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the course" },
    { id: "cg1", text: "Learn all abot the course" },
    { id: "cg1", text: "Help other students in the course Q&A" },
  ];

  return (
    <div className="goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

export default App;
