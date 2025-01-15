import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(`Item: ${item} selected`);
    // alert(`Item: ${item} selected`);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <ListGroup
        items={["Python", "Java", "C++", "C"]}
        heading="Languages"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
