import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Dialog from "../material_ui_components/CustomModal/CustomModal";
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
import TaskImageDndPush from "./TaskImageDndPush";
import ExamImageValidator from "./ExamImageValidator";
import postImage from "./PostImage";
import getLayoutParams from "./getImageLayotRowsCols";
import CustomRadio from "../material_ui_components/CustomRadio/CustomRadio";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TaskOverlayButton from "./TaskOverlayButton";

const EditTaskImages = (props) => {
  const { task, updateTask } = props;
  const index = props.index || 0;
  const taskImages = task.currentAnswers.image || [];
  const taskImageLayout = task.currentAnswers.imageLayout || "2x1";
  const [imageLayout, setImageLayout] = useState(taskImageLayout);
  const [images, setImages] = useState(taskImages);
  const [open, setOpen] = useState(false);
  const [isSending, setSending] = useState(false);
  const maxImages = 2;
  const imagesLeftToAdd = maxImages - (images.length || 0);
  const pushImages = useCallback(
    (inputImages) => {
      // console.log(images.map(ExamImageValidator))
      let imagesToPush = [];
      for (const image of inputImages) {
        const result = ExamImageValidator(image);
        console.log(result, result.constructor.name);
        if ("ValidationError" === result.constructor.name) {
          console.log("image input error", result);
          return;
        }
        imagesToPush.push(result);
      }
      if (imagesToPush.length > imagesLeftToAdd) {
        //todo 2 much images error
        return;
      }
      setImages(images.concat(imagesToPush));
    },
    [images, maxImages, imagesLeftToAdd]
  );
  const onDrop = (srcId, sourceIndex, targetIndex) => {
    setImages(swap(images, sourceIndex, targetIndex));
  };
  const layoutParam = getLayoutParams(imageLayout);
  const sendImages = async () => {
    setSending(true);
    const newImages = await Promise.all(
      images.map(async (image) => {
        return Object.getPrototypeOf(image) === File.prototype
          ? postImage(image)
          : image;
      })
    );
    console.log("sendImages", newImages);
    let updatedTask = { ...task };
    updatedTask.currentAnswers.image = newImages;
    updatedTask.currentAnswers.imageLayout = imageLayout;
    updateTask({ ...updatedTask });
    setSending(false);
    //TODO komunikat done
    setOpen(false);
  };
  const removeImage = (index) => {
    // console.log("removeImage",index)
    if (isSending) return;
    const newImages = [...images];
    newImages.splice(index, 1);
    // console.log("removeImage",newImages)
    setImages(newImages);
  };

  return (
    <>
      <TaskOverlayButton
        tooltip={"Dodaj lub edytuj zdjęcia do zadania"}
        onClick={() => {
          setOpen(true);
        }}
      >
        <PhotoLibraryIcon fontSize={"small"} />
      </TaskOverlayButton>
      <Dialog
        open={open}
        dialogTitle={"Edycja zdjęć"}
        fullWidth={true}
        maxWidth={"lg"}
        onClose={(event, reason) => {
          setOpen(false);
          console.log("dClose",event, reason);
        }}
        dialogActionsChildren={[
          <Button
            color={"transparent"}
            onClick={() => {
              setOpen(false);
            }}
            disabled={isSending}
          >
            Anuluj
          </Button>,
          <Button
            color={"primary"}
            onClick={() => {
              sendImages();
            }}
            disabled={isSending}
          >
            Zapisz zdjęcia
          </Button>,
        ]}
        // style={{ minHeight: "80vh" }}
      >
        {/*<DialogTitle id="form-image-title">Edycja zdjęć</DialogTitle>*/}
        {/*<DialogContentText>*/}
        {/*</DialogContentText>*/}
        <div style={{ minHeight: "50vh" }}>
          {!isSending ? (
            <TaskImageDndPush onDrop={pushImages} />
          ) : (
            <LinearProgress />
          )}
          <div>
            <CustomRadio
              labelProps={{ label: "poziomo", disabled: isSending }}
              radioProps={{
                checked: imageLayout === "2x1",
                onChange: () => {
                  setImageLayout("2x1");
                },
              }}
            />
            <CustomRadio
              labelProps={{ label: "pionowo", disabled: isSending }}
              radioProps={{
                checked: imageLayout === "1x2",
                onChange: () => {
                  setImageLayout("1x2");
                },
              }}
            />
          </div>
          <ReactResizeDetector>
            {({ width, height }) => {
              const rowHeight = (width || 20) / 4;
              const rowWidth = rowHeight * layoutParam.cols;
              const dropZoneHeight = rowHeight * layoutParam.rows;
              return (
                <div style={{ width: "100%", margin: "0", padding: "0" }}>
                  <GridContextProvider onChange={onDrop}>
                    <GridDropZone
                      boxesPerRow={layoutParam.cols}
                      rowHeight={(width || 20) / 4}
                      id={`task-image-dnd-${index}`}
                      style={{
                        height: dropZoneHeight,
                        width: rowWidth,
                        margin: "0 auto",
                      }}
                      disableDrag={isSending}
                    >
                      {images.map((img, index) => {
                        return (
                          <TaskImageDndComponent
                            removeImage={removeImage}
                            image={img}
                            itemKey={index}
                          />
                        );
                      })}
                      {/*{*/}
                      {/*    images.length < 4 && (<TaskImageDndPush/>)*/}
                      {/*}*/}
                    </GridDropZone>
                  </GridContextProvider>
                </div>
              );
            }}
          </ReactResizeDetector>
        </div>
      </Dialog>
    </>
  );
};

EditTaskImages.propTypes = {};

export default EditTaskImages;
