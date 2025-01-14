import React from "react";

const ListGroup = () => {
  const items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];

  return (
    <>
      <h1>List Items</h1>
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
