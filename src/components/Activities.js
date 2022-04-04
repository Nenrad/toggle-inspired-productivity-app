import React from "react";
import Activity from "./Activity";
import "./Activities.css";

const Activities = (props) => {
  return (
    <div className="Activities">
      {props.activities
        .slice(0)
        .reverse()
        .map((activity) => {
          console.log(activity);
          return <Activity className="Activity" task={activity} />;
        })}
    </div>
  );
};

export default Activities;
