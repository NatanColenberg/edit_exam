import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, DialogActions, DialogTitle, Paper, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Form from '../form/form';
import Patient from '../../model/patientModel';
import { getPatientDisplayName } from '../../utils/patientUtils';

import './modal.css'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

interface Props {
  patient: Patient
}

export default function TransitionsModal(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const patientName = getPatientDisplayName(props.patient.name);

  return (
    <div>
      <Button color="primary" variant="contained" startIcon={<CreateIcon />} onClick={handleOpen}>
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
            <DialogTitle id="scroll-dialog-title">
              {patientName} ({props.patient.mrns[0].mrn})
            </DialogTitle>
            <Form patient={props.patient} />
            <DialogActions>
              <Button onClick={handleClose} color="secondary" variant="contained">
                Close
              </Button>
              <Button onClick={handleClose} color="secondary" variant="contained">
                Edit
              </Button>
            </DialogActions>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
