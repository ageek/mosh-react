import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   const items = ["Delhi", "New York", "Mumbai", "Bangalore", "Tokyo"];
  //   items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const handleClick = (event: React.MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>List of {heading}</h1>
      {items.length === 0 && <p> No items to display</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item)}
            // onClick={(handleClick)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
