import React from "react";

const Message = () => {
  const name = "Dosh";
  return (
    <div
    // style={{
    //   color: "red",
    //   fontWeight: "bold",
    //   fontSize: "24px",
    //   fontStyle: "italic",
    //   transform: "rotate(5deg)",
    // }}
    >
      <h1>Hello {name ? name : "World"}</h1>
    </div>
  );
};

export default Message;
