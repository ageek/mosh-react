import { useState } from "react";
import AlertExercise from "./components/AlertExercise";
import Button from "./components/Button";

const App3 = () => {
  const clickHandler = () => {
    console.log("Button clicked");
    setAlertState(true);
  };

  const closeHander = () => {
    setAlertState(false);
  };

  const [alertState, setAlertState] = useState(false);

  return (
    <div>
      {alertState && (
        <AlertExercise onClose={closeHander}>This is an alert</AlertExercise>
      )}

      <Button handleClick={clickHandler}>Click me</Button>
    </div>
  );
};

export default App3;
