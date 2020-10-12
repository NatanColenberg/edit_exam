import { Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import Patient from '../../../model/patientModel';
import { getPatientDisplayName } from '../../../utils/patientUtils';

interface Props {
  patient: Patient
}

export default function PatientForm(props: Props) {

  const patientName = getPatientDisplayName(props.patient.name);

  return (<div>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="PATIENT NAME" variant="filled" fullWidth value={patientName} />
      </Grid>
      <Grid item xs={3}>
        <TextField id="standard-basic" label="DATE OF BIRTH" variant="filled" fullWidth value={props.patient.birthDateStr} />
      </Grid>
      <Grid item xs={3}>
        <TextField id="standard-basic" label="GENDER" variant="filled" fullWidth value={props.patient.patientSex} />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="MRN" variant="filled" fullWidth value={props.patient.mrns[0].mrn} />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="MPI" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="DATA SOURCE SYSTEM" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="RACE" variant="filled" fullWidth value={props.patient.patientRace} />
      </Grid>
    </Grid>
  </div>)
}