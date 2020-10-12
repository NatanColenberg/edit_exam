import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import Form from "../form/form";
import Patient from "../../model/patientModel";
import { getDisplayName } from "../../utils/patientUtils";

import "./modal.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface Props {
  patient: Patient;
}

export default function TransitionsModal(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const patientName = getDisplayName(props.patient.name);

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        startIcon={<CreateIcon />}
        onClick={handleOpen}
      >
        Edit Exam
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Paper>
            {/* Title */}
            <DialogTitle>
              <div className="modal-title">
                {patientName} ({props.patient.mrns[0].mrn})
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
            </DialogTitle>

            {/* Form */}
            <Divider variant="fullWidth" />
            <Form patient={props.patient} editMode={editMode} />

            {/* Buttons */}
            <Divider variant="fullWidth" />
            <div className="modal-buttons">
              <DialogActions>
                <Button
                  onClick={() =>
                    editMode ? setEditMode(false) : handleClose()
                  }
                  color="default"
                  variant="contained"
                >
                  {editMode ? "Cancel" : "Close"}
                </Button>
                <Button
                  onClick={() => setEditMode(!editMode)}
                  color="primary"
                  variant="contained"
                >
                  {editMode ? "Save" : "Edit"}
                </Button>
              </DialogActions>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
