import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddTaskDialog from "./AddTaskDialog";
import TaskOverlayButton from "./TaskOverlayButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';
const AddTaskWithDropdownMenu = ({ index, pushTaskAtIndex, ...props }) => {
  const [state, setState] = React.useState({
    anchorEl: null,
    open: false,
    indexOffset: 0,
  });
  // const [open, setOpen] = React.useState(false);
  const anchorEl = state.anchorEl;
  const open = state.open;
  const indexOffset = state.indexOffset;
  const handleOpenDialog = () => {
    // setOpen(true);
    setState({ open: true, anchorEl: anchorEl, indexOffset: indexOffset });
  };

  const handleCloseDialog = () => {
    // setOpen(false);
    setState({ open: false, anchorEl: anchorEl, indexOffset: indexOffset });
  };

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setState({
      anchorEl: event.currentTarget,
      open: open,
      indexOffset: indexOffset,
    });
  };

  const handleUpChoose = () => {
    setState({ open: true, anchorEl: null, indexOffset: 0 });
  };
  const handleDownChoose = () => {
    setState({ open: true, anchorEl: null, indexOffset: 1 });
  };

  const handleClose = () => {
    setState({ anchorEl: null, open: open, indexOffset: indexOffset });
  };
  return (
    <>
        <TaskOverlayButton onClick={handleClick}><AddCircleIcon fontSize={"small"}/></TaskOverlayButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleUpChoose}>Dodaj zadanie powyżej</MenuItem>
          <MenuItem onClick={handleDownChoose}>Dodaj zadanie poniżej</MenuItem>
        </Menu>
        <AddTaskDialog
          open={open}
          handleClose={handleCloseDialog}
          indexOffset={indexOffset}
          index={index}
          pushTaskAtIndex={pushTaskAtIndex}
        />
    </>
  );
};

export default AddTaskWithDropdownMenu;
