import Alert from "./components/Alert";
import Button from "./components/Button";

const App2 = () => {
  return (
    <div>
      <Alert>
        This is <i>first</i> alert
      </Alert>
      <Alert>This is 2nd alert</Alert>
      <Button children="Click me" type="primary" />
      <Button children="Click for warning" type="warning" />
      <Button children="Click for success" type="success" />
    </div>
  );
};

export default App2;
