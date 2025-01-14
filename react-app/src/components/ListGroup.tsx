import React from "react";

const ListGroup = () => {
  let items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];
  //   items = [];

  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List Items</h1>
      {items.length === 0 && <p> No items to display</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(item)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
