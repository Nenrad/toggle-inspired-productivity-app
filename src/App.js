import "./App.css";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Activities from "./components/Activities";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const sendTaskToParent = (name, time) => {
    setActivities([...activities, { name: name, time: time }]);
  };
  return (
    <div className="App">
      <Form sendTaskToParent={sendTaskToParent} />
      <Activities activities={activities} />
    </div>
  );
}

export default App;
