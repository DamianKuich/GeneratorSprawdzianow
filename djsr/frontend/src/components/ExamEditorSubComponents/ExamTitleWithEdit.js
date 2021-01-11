import React from "react";
import TextArea from "react-autosize-textarea";
import TaskOverlay from "./TaskOverlay";
import TaskOverlayButton from "./TaskOverlayButton";
const ExamTitleWithEdit = (props) => {
  const {
    setTaskToEditWithPart,
    editorTaskPart,
    title,
    updateStateAndSaveExam,
  } = props;
  const isEditing = editorTaskPart === "ExamTitle";
  const handleChange = (event) => {
    const value = event.target.value;
    updateStateAndSaveExam((state) => {
      state.exam.name = value;
      return state;
    });
  };
  return !isEditing ? (
    <TaskOverlay
      forceOverlay={isEditing}
      menuComponents={[
        <TaskOverlayButton
          onClick={() => {
            setTaskToEditWithPart(null, "ExamTitle");
          }}
        >
          Zmień nazwę sprawdzianu
        </TaskOverlayButton>,
      ]}
    >
      <h2>{title}</h2>
    </TaskOverlay>
  ) : (
    <TaskOverlay
      forceOverlay={isEditing}
      menuComponents={[
        [
          <TaskOverlayButton
            onClick={() => {
              setTaskToEditWithPart(null, null);
            }}
          >
            Zakończ Edycje
          </TaskOverlayButton>,
        ],
      ]}
    >
      <form>
        <TextArea
          onChange={handleChange}
          value={title}
          style={{
            border: "none",
            backgroundColor: "transparent",
            display: "inline",
            width: "100%",
            resize: "none",
            outline: "none",
            overflow: "auto",
          }}
        />
      </form>
    </TaskOverlay>
  );
};

export default ExamTitleWithEdit;
