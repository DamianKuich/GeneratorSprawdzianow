import React, { useCallback } from "react";
import { GridItem } from "react-grid-dnd";
import { useDropzone } from "react-dropzone";

const TaskImageDndPush = (props) => {
    const {onDrop}= props
  // const onDrop = useCallback((acceptedFiles) => {
  //   console.log(acceptedFiles);
  // }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div key={"pushxd"}
    >
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
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Upuść zdjęcia tutaj</p>
              ) : (
                // <p>Drag 'n' drop some files here, or click to select files</p>
                  <p>Przyciągnij zdjęcia tutaj, albo kliknij tutaj, aby wybrać zdjęcia</p>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskImageDndPush;
