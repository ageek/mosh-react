import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
      <ListGroup
        items={["Python", "Java", "C++", "C"]}
        heading="Languages"
      ></ListGroup>
    </div>
  );
}

export default App;
