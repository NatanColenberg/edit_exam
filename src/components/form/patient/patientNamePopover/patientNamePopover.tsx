import React from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import {
  DialogActions,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import { getName } from "../../../../utils/patientUtils";
import "./patientNamePopover.css";

type Props = {
  patientName: string;
  open: boolean;
  anchorEl: any;
  onClose: () => void;
};

export default function PatientNamePopover(props: Props) {
  return (
    <Popover
      marginThreshold={36}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className="patientNamePop-wrap">
        <Grid container spacing={3}>
          {/* Title */}
          <Grid item xs={3}>
            <TextField
              id="patient-dob"
              size="small"
              label="TITLE"
              variant="filled"
              fullWidth
              value={getName(props.patientName).title}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={6}>
            <TextField
              id="patient-dob"
              size="small"
              label="FIRST NAME"
              variant="filled"
              fullWidth
              value={getName(props.patientName).firstName}
              required
            />
          </Grid>

          {/* Middle Name */}
          <Grid item xs={6}>
            <TextField
              id="patient-dob"
              size="small"
              label="MIDDLE NAME"
              variant="filled"
              fullWidth
              value={getName(props.patientName).middleName}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={6}>
            <TextField
              id="patient-dob"
              size="small"
              label="LAST NAME"
              variant="filled"
              fullWidth
              value={getName(props.patientName).lastName}
              required
            />
          </Grid>

          {/* Suffix */}
          <Grid item xs={6}>
            <TextField
              id="patient-dob"
              size="small"
              label="SUFFIX"
              variant="filled"
              fullWidth
              value={getName(props.patientName).suffix}
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <div className="patientNamePop-Buttons">
          <Divider variant="fullWidth" />
          <DialogActions>
            <Button onClick={props.onClose} color="default" variant="contained">
              Cancel
            </Button>
            <Button onClick={props.onClose} color="primary" variant="contained">
              OK
            </Button>
          </DialogActions>
        </div>
      </div>
    </Popover>
  );
}
