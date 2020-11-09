import React from "react";
import Collapse from "@material-ui/core/Collapse";

const CollapseMenuContainer = ({ currentTabId, id, children }) => {
  return (
    <Collapse in={id === currentTabId} style={{ width: "100%" }}>
      {children}
    </Collapse>
  );
};

export default CollapseMenuContainer;
