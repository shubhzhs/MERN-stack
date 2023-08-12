import React from "react";

import "./goalList.css";

const GoalList = (props) => {
  console.log(props.goals);
  return (
    <div>
      <ul className="goal-list">
        {props.goals.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default GoalList;
