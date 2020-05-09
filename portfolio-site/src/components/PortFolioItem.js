import React from "react";

const PortFolioItem = (props) => (
  <div>
    <h1>A Thing I've done</h1>
    This is the page for the item with id of {props.match.params.id}
  </div>
);

export default PortFolioItem;