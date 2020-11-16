import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Latex from "react-latex";
import { MDBContainer } from "mdbreact";
import {Container} from "@material-ui/core";
import TaskToolTip from "./TaskToolTip";

const TaskSearchDndResults = ({ taskSearchResult }) => {
  return (
    <Container>
      {Array.isArray(taskSearchResult) && taskSearchResult.length > 0 && (
        <Droppable droppableId="searchDroppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "red" : "white",
              }}
              className="border-top"
            >
              {taskSearchResult.map((task, index) => (
                <Draggable
                  key={"task-" + task.id}
                  draggableId={"" + task.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{...provided.draggableProps.style, position:"relative"}}
                      className="border-right border-left border-bottom p-2"
                    >
                      <Latex>{task.text}</Latex>
                      <TaskToolTip/>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
      {Array.isArray(taskSearchResult) && taskSearchResult.length === 0 && (
        <div>Brak zadań o podanych kryteriach</div>
      )}
      {taskSearchResult === null && (
        <div className="text-truncate">
          Wybierz umiejetnosci z listy. Aby dodać zadania do sprawdzianu
          przeciągnij je na sprawdzian
        </div>
      )}
      {taskSearchResult === false && (
        <div className="text-truncate">
          Podczas zapytania do serwera wystąpił bład spróbuj ponownie puźniej
        </div>
      )}
    </Container>
  );
};

export default TaskSearchDndResults;
