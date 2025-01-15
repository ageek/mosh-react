import Alert from "./components/Alert";
import Button from "./components/Button";

const clickHandler = () => {
  console.log("Button clicked");
};

const App2 = () => {
  return (
    <div>
      <Alert>
        This is <i>first</i> alert
      </Alert>
      <Alert>This is 2nd alert</Alert>
      <Button children="Click me" color="primary" handleClick={clickHandler} />
      <Button
        children="Click for warning"
        color="warning"
        handleClick={clickHandler}
      />
      <Button color="success" handleClick={clickHandler}>
        Click for success{" "}
      </Button>
    </div>
  );
};

export default App2;
