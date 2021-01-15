import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import AuthImage from "./AuthImage";

const Thumb = (props) => {
  const { image } = props;
  const [thumb, setThumb] = useState(null);
  useEffect(() => {
    // if (!image) return null;
    // if (Number.isInteger(image)){
    //
    // }
    switch (true) {
      case Number.isInteger(image):
        console.log("thumb is int", image);
        setThumb(`${window.location.origin}/api/user/image/${image}`);
        break;
      case Object.getPrototypeOf(image || {}) === File.prototype:
        console.log("thumb is file", image);
        let reader = new FileReader();
        reader.onloadend = () => {
          setThumb(reader.result);
        };
        reader.readAsDataURL(image);
      default:
        console.log("thumb is default", image);
        setThumb(false);
    }
  }, [image]);
  return (!Number.isInteger(image)?
    <img
      onDragStart={(e) => {
        e.preventDefault();
      }}
      src={thumb || ""}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    /> : <AuthImage
      onDragStart={(e) => {
        e.preventDefault();
      }}
      src={image}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    />
  );
};

const TaskImageDndComponent = (props) => {
  console.log("imgdnd ", props);
  const { image, itemKey,removeImage } = props;
  const isFile = !Number.isInteger(image);
  const key=(Number.isInteger(image)) ? image : (image.name || "XD");
    console.log("imageKey",key)
  return (
    <GridItem key={key || "XD"}>
      <div
        // style={{
        //     width: "100%",
        //     height: "100%",
        //     // backgroundColor: "blue"
        //     // display: "flex",
        //     // flexWrap: "wrap",
        //     // alignContent: "center",
        //     // margin: "10px",
        //     // position: "relative"
        // }}
        style={{ width: "100%", height: "100%", display: "flex" }}
        // className="w-100 h-100 d-flex"
      >
        <div
          style={
            {
              // cursor: "pointer",
              // border:
              //     "2px solid black",
              // backgroundColor:
              //     "white",
              // position: "absolute"
            }
          }
          style={{ width: "100%", height: "100%", padding: "5px" }}
          // className="w-100 h-100 p-2"
          // zrobicKontener z tego diva
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              // padding: "10px",
              border: "1px solid",
              justifyContent: "center",
            }}
            // className="w-100 h-100 d-flex border bg-light"
          >
            <>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  height: "30px",
                  width: "30px",
                  zIndex: "3",
                  margin: "6px",
                  color: "red",
                }}
                onClick={() => {
                  removeImage(itemKey)
                }}
              >
                {/*<Icon size={"100%"} icon={timesCircleO} />*/}
                <div>X</div>
              </div>
              <Thumb image={image} />
            </>
          </div>
        </div>
      </div>
    </GridItem>
  );
};

TaskImageDndComponent.propTypes = {};

export default TaskImageDndComponent;
