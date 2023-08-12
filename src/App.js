import React from "react";

import "./App.css";
import "./components/GoalList/GoalList";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course" },
    { id: "cg3", text: "Help other students in the course Q&A" },
  ];

  return (
    <div className="goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
