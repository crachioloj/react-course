import React from "react";

const PortFolioItem = (props) => (
  <div>
    <h1>A Thing I've done</h1>
    <p>This is the page for the item with id of {props.match.params.id}</p>
  </div>
);

export default PortFolioItem;