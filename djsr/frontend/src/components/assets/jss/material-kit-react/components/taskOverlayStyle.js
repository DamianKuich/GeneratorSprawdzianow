import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "../../material-kit-react";

const taskOverlayStyle = {
  root: {
    position: "relative",
    margin: "0px",
    padding: "0px",
  },
  activeRoot: {
    border: `1px solid ${primaryColor}`,
    margin: "-2px -13px",
    padding: "1px 12px",
  },
  menuContainer: {
    position: "absolute",
    display: "flex",
    color: "white",
  },
  menuLeftLeaf: {
    border: "solid transparent",
    borderRight: `solid ${primaryColor}`,
    borderWidth: "22px 12px 0 0",
  },
  menuRightLeaf: {
    border: "solid transparent",
    borderLeft: `solid ${primaryColor}`,
    borderWidth: "22px 0 0 12px",
  },
};

export default taskOverlayStyle;
