import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
