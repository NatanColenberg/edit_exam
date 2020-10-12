import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Patient from "../../../model/patientModel";
import { getDisplayName, getAddress } from "../../../utils/patientUtils";

import PatientNamePopover from "./patientNamePopover/patientNamePopover";
import OtherPatientIdent from "./otherPatientIdent";

interface Props {
  patient: Patient;
  editMode: boolean;
}

export default function PatientForm(props: Props) {
  const [patientNamePop, setPatientNamePop] = useState(false);
  const [patientNamePopAnc, setPatientNamePopAnc] = useState<any | null>(null);

  const patientName = getDisplayName(props.patient.name);
  const primaryCarePhysicianName = getDisplayName(
    props.patient.primaryCarePhysicianName
  );

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* Patient Name */}
          <TextField
            id="patient-name"
            size="small"
            color="secondary"
            label="PATIENT NAME"
            variant="filled"
            fullWidth
            value={patientName}
            disabled={!props.editMode}
            required
            onClick={(e) => {
              if (props.editMode) {
                setPatientNamePopAnc(e.currentTarget);
                setPatientNamePop(true);
              }
            }}
            onBlur={() => {
              // setPatientNamePop(false);
            }}
          />
          <PatientNamePopover
            patientName={props.patient.name}
            open={patientNamePop}
            onClose={() => setPatientNamePop(false)}
            anchorEl={patientNamePopAnc}
          />
        </Grid>

        {/* Date of Birth */}
        <Grid item xs={3}>
          <TextField
            id="patient-dob"
            size="small"
            label="DATE OF BIRTH"
            variant="filled"
            fullWidth
            value={props.patient.birthDateStr}
            disabled={!props.editMode}
            required
          />
        </Grid>

        {/* Gender */}
        <Grid item xs={3}>
          <TextField
            id="standard-basic"
            size="small"
            label="GENDER"
            variant="filled"
            fullWidth
            value={props.patient.patientSex}
            disabled={!props.editMode}
          />
        </Grid>

        {/* MRN */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="MRN"
            variant="filled"
            fullWidth
            value={props.patient.mrns[0].mrn}
            disabled={!props.editMode}
            required
          />
        </Grid>

        {/* MPI */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="MPI"
            variant="filled"
            fullWidth
            disabled={!props.editMode}
          />
        </Grid>

        {/* Data Source System */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="DATA SOURCE SYSTEM"
            variant="filled"
            fullWidth
            disabled
          />
        </Grid>

        {/* Rase */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="RACE"
            variant="filled"
            fullWidth
            value={props.patient.patientRace}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Other Patient Identifiers */}
        <Grid item xs={12}>
          <OtherPatientIdent />
        </Grid>

        {/* Primary Care Physician */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="PRIMARY CARE PHYSICIAN"
            variant="filled"
            fullWidth
            value={primaryCarePhysicianName}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            size="small"
            label="ADDRESS"
            variant="filled"
            fullWidth
            value={getAddress(props.patient.patientAddress).street}
            disabled={!props.editMode}
          />
        </Grid>

        {/* City */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="CITY"
            variant="filled"
            fullWidth
            value={getAddress(props.patient.patientAddress).city}
            disabled={!props.editMode}
          />
        </Grid>

        {/* State */}
        <Grid item xs={3}>
          <TextField
            id="standard-basic"
            size="small"
            label="STATE"
            variant="filled"
            fullWidth
            value={getAddress(props.patient.patientAddress).state}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Zip */}
        <Grid item xs={3}>
          <TextField
            id="standard-basic"
            size="small"
            label="ZIP"
            variant="filled"
            fullWidth
            value={getAddress(props.patient.patientAddress).zip}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Home Phone */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="HOME PHONE"
            variant="filled"
            fullWidth
            value={props.patient.homePhone}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Work Phone */}
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            size="small"
            label="WORK PHONE"
            variant="filled"
            fullWidth
            value={props.patient.workPhone}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Admit Date/Time */}
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            size="small"
            label="ADMIT DATE/TIME"
            variant="filled"
            fullWidth
            value={props.patient.patientRace}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Admit Time Zone */}
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            size="small"
            variant="filled"
            fullWidth
            value="UTC-04:00"
            disabled
          />
        </Grid>

        {/* Discharge Date/Time */}
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            size="small"
            label="DISCHARGE DATE/TIME"
            variant="filled"
            fullWidth
            // value={props.patient.patientRace}
            disabled={!props.editMode}
          />
        </Grid>

        {/* Discharge Time Zone */}
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            size="small"
            variant="filled"
            fullWidth
            // value={props.patient.patientRace}
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
}
