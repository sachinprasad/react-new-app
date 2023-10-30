// import { Fragment } from "react";

import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New Delhi", "Mumbai", "Bangalore", "Kolkata"];
  // items = [];
  let selectedItem = -1;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)

  if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No Items found</p>
      </>
    );

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Below is shortcut to use  <Fragment>
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
