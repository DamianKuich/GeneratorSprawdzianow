import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "../material_ui_components/CustomButtons/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import ReactResizeDetector from "react-resize-detector";
import TaskImageDndComponent from "./TaskImageDndComponent";
const EditTaskImages = (props) => {
  const { task } = props;
  const index = props.index || 0;
  const taskImages = task.currentAnswers.image || [];
  const [images, setImages] = useState(taskImages);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Edytuj zdjecia
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle id="form-image-title">Edycja zdjęć</DialogTitle>
        {/*<DialogContentText>*/}
        {/*</DialogContentText>*/}
        <ReactResizeDetector>
          {({ width, height }) => {
            return (
              <GridContextProvider onChange={() => {}}>
                <GridDropZone
                  boxesPerRow={4}
                  rowHeight={100}
                  id={`task-image-dnd-${index}`}
                >
                  {images.map((img, index) => {
                    return (
                      <TaskImageDndComponent image={img} itemKey={index} />
                    );
                  })}
                </GridDropZone>
              </GridContextProvider>
            );
          }}
        </ReactResizeDetector>
      </Dialog>
    </>
  );
};

EditTaskImages.propTypes = {};

export default EditTaskImages;
