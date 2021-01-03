import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ReactResizeDetector from "react-resize-detector";
import styles from "../assets/jss/material-kit-react/components/taskOverlayStyle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const TaskOverlay = ({
  children,
  menuComponents,
  forceOverlay,
  rootBoxProps,
  ...props
}) => {
  const classes = useStyles();
  const [isHovered, setHover] = useState(false);
  const isActive = isHovered || forceOverlay;
  return (
    <ReactResizeDetector>
      {({ width, height }) => {
        // console.log("task overlay", width, height);
        const boxWidth = width;
        return (
          <Box
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
            // borderColor={isHovered ? "primary.main" : ""}
            // style={{
            //   border: isActive ? "1px solid black" : "",
            //   margin: isActive ? "-2px -13px" : "0px",
            //   padding: isActive ? "1px 12px" : "0px",
            // }}
              className={classNames({
                [classes.root]:true,
                [classes.activeRoot]:isActive
              })}
            // position={"relative"}
          >
            {isActive && (
              <ReactResizeDetector>
                {({ width, height }) => {
                  const menuWidth = width;
                  const rightOffset = boxWidth / 2 - menuWidth / 2;
                  return (
                    <Box
                      position={"absolute"}
                      top={`-${height}px`}
                      right={`${rightOffset}px`}
                      // left={"auto"}
                      // right={"auto"}
                      borderColor={"primary.main"}
                      display={"flex"}
                      color={"white"}
                    >
                      <div
                        style={{
                          border: "solid transparent",
                          borderRight: "solid black",
                          borderWidth: "22px 12px 0 0",
                        }}
                      ></div>
                      {menuComponents}
                      <div
                        style={{
                          border: "solid transparent",
                          borderLeft: "solid black",
                          borderWidth: "22px 0 0 12px",
                        }}
                      ></div>
                    </Box>
                  );
                }}
              </ReactResizeDetector>
            )}
            <Box
              // m={isActive ? "-1px" : ""}
              style={{}}
            >
              {children}
            </Box>
          </Box>
        );
      }}
    </ReactResizeDetector>
  );
};

export default TaskOverlay;
