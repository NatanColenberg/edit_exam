import React, { useState } from "react";
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Patient from "../../../model/patientModel";
import { getDisplayName, getAddress, getDate, getPatientSexIndex } from "../../../utils/patientUtils";

import { Formik } from 'formik'

import PatientNamePopover from "./patientNamePopover/patientNamePopover";
import OtherPatientIdent from "./otherPatientIdent";

interface Props {
  patient: Patient;
  editMode: boolean;
}

export default function PatientForm(props: Props) {
  const [patientNamePop, setPatientNamePop] = useState(false);
  const [patientNamePopAnc, setPatientNamePopAnc] = useState<any | null>(null);
  const [physicianNamePop, setPhysicianNamePop] = useState(false);
  const [physicianNamePopAnc, setPhysicianNamePopAnc] = useState<any | null>(null);

  const patientName = getDisplayName(props.patient.name);
  const primaryCarePhysicianName = getDisplayName(
    props.patient.primaryCarePhysicianName
  );

  return (
    <Formik
      initialValues={{
        name: patientName,
        dob: getDate(props.patient.birthDate.$date).format('YYYY-MM-DD'),
        gender: getPatientSexIndex(props.patient.patientSex),
        mrn: props.patient.mrns[0].mrn,
        mpi: '',
        dataSourceSystem: props.patient.mrns[0].dataSourceSystemId,
        race: props.patient.patientRace,
        primaryCarePhysicianName: primaryCarePhysicianName,
        address: getAddress(props.patient.patientAddress).street,
        city: getAddress(props.patient.patientAddress).city,
        state: getAddress(props.patient.patientAddress).city,
        zip: getAddress(props.patient.patientAddress).zip,
        homePhone: props.patient.homePhone,
        workPhone: props.patient.workPhone,
        admitDateTime: props.patient.admitDateTime ?
          getDate(props.patient.admitDateTime?.$date).format("YYYY-MM-DDThh:mm") : '',
        dischargeDateTime: props.patient.dischargeDateTime ?
          getDate(props.patient.dischargeDateTime?.$date).format("YYYY-MM-DDThh:mm") : ''
      }}
      onSubmit={(values, { setSubmitting }) => { }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {/* Patient Name */}
              <TextField
                id="patient-name"
                name="name"
                size="small"
                color="primary"
                label="PATIENT NAME"
                variant="filled"
                fullWidth
                value={values.name}
                onChange={handleChange}
                disabled={!props.editMode}
                required
                onClick={(e) => {
                  if (props.editMode) {
                    setPatientNamePopAnc(e.currentTarget);
                    setPatientNamePop(true);
                  }
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
                name="dob"
                type="date"
                size="small"
                label="DATE OF BIRTH"
                variant="filled"
                fullWidth
                defaultValue={values.dob}
                value={values.dob}
                onChange={handleChange}
                disabled={!props.editMode}
                required
              />
              {/* <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
            </Grid>

            {/* Gender */}
            <Grid item xs={3}>
              <FormControl variant="filled" fullWidth size="small">
                <InputLabel id="patient-genderLabel">Gender</InputLabel>
                <Select
                  id="patient-gender"
                  labelId="patient-genderLabel"
                  name="gender"
                  variant="filled"
                  value={values.gender}
                  onChange={handleChange}
                  disabled={!props.editMode}
                >
                  <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem>
                  <MenuItem value={2}>Other</MenuItem>
                  <MenuItem value={3}>Unknown</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* MRN */}
            <Grid item xs={6}>
              <TextField
                id="patient-mrn"
                name="mrn"
                size="small"
                label="MRN"
                variant="filled"
                fullWidth
                value={values.mrn}
                onChange={handleChange}
                disabled={!props.editMode}
                required
              />
            </Grid>

            {/* MPI */}
            <Grid item xs={6}>
              <TextField
                id="patient-mpi"
                name="mpi"
                size="small"
                label="MPI"
                variant="filled"
                value={values.mpi}
                onChange={handleChange}
                fullWidth
                disabled={!props.editMode}
              />
            </Grid>

            {/* Data Source System */}
            <Grid item xs={6}>
              <TextField
                id="patient-dataSourceSystem"
                name="dataSourceSystem"
                size="small"
                label="DATA SOURCE SYSTEM"
                variant="filled"
                value={values.dataSourceSystem}
                onChange={handleChange}
                fullWidth
                disabled
              />
            </Grid>

            {/* Rase */}
            <Grid item xs={6}>
              <TextField
                id="patient-race"
                name="race"
                size="small"
                label="RACE"
                variant="filled"
                fullWidth
                value={values.race}
                onChange={handleChange}
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
                id="patient-primaryCarePhysician"
                name="primaryCarePhysician"
                size="small"
                label="PRIMARY CARE PHYSICIAN"
                variant="filled"
                fullWidth
                value={values.primaryCarePhysicianName}
                onChange={handleChange}
                disabled={!props.editMode}
                onClick={(e) => {
                  if (props.editMode) {
                    setPhysicianNamePopAnc(e.currentTarget);
                    setPhysicianNamePop(true);
                  }
                }}
              />
              <PatientNamePopover
                patientName={props.patient.primaryCarePhysicianName}
                open={physicianNamePop}
                onClose={() => setPhysicianNamePop(false)}
                anchorEl={physicianNamePopAnc}
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <TextField
                id="patient-address"
                name="address"
                size="small"
                label="ADDRESS"
                variant="filled"
                fullWidth
                value={values.address}
                disabled={!props.editMode}
              />
            </Grid>

            {/* City */}
            <Grid item xs={6}>
              <TextField
                id="patient-city"
                name="city"
                size="small"
                label="CITY"
                variant="filled"
                fullWidth
                value={values.city}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* State */}
            <Grid item xs={3}>
              <TextField
                id="patient-state"
                name="state"
                size="small"
                label="STATE"
                variant="filled"
                fullWidth
                value={values.state}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Zip */}
            <Grid item xs={3}>
              <TextField
                id="patient-zip"
                name="zip"
                size="small"
                label="ZIP"
                variant="filled"
                fullWidth
                value={values.zip}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Home Phone */}
            <Grid item xs={6}>
              <TextField
                id="patient-homePhone"
                name="homePhone"
                size="small"
                label="HOME PHONE"
                variant="filled"
                fullWidth
                value={values.homePhone}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Work Phone */}
            <Grid item xs={6}>
              <TextField
                id="patient-workPhone"
                name="workPhone"
                size="small"
                label="WORK PHONE"
                variant="filled"
                fullWidth
                value={values.workPhone}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Admit Date/Time */}
            <Grid item xs={4}>
              <TextField
                id="patient-admitDateTime"
                name="admitDateTime"
                type="datetime-local"
                size="small"
                label="ADMIT DATE/TIME"
                variant="filled"
                fullWidth
                value={values.admitDateTime}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Admit Time Zone */}
            <Grid item xs={2}>
              <TextField
                id="patient-admitTimeZone"
                name="admitTimeZone"
                size="small"
                variant="filled"
                fullWidth
                value={values.admitDateTime ? "UTC-04:00" : ""}
                disabled
              />
            </Grid>

            {/* Discharge Date/Time */}
            <Grid item xs={4}>
              <TextField
                id="patient-dischargeDateTime"
                name="dischargeDateTime"
                type="datetime-local"
                size="small"
                label={values.dischargeDateTime ? "DISCHARGE DATE/TIME" : ""}
                variant="filled"
                fullWidth
                value={values.dischargeDateTime}
                onChange={handleChange}
                disabled={!props.editMode}
              />
            </Grid>

            {/* Discharge Time Zone */}
            <Grid item xs={2}>
              <TextField
                id="patient-dischargeTimeZone"
                name="dischargeTimeZone"
                size="small"
                variant="filled"
                fullWidth
                value={values.dischargeDateTime ? "UTC-04:00" : ""}
                disabled
              />
            </Grid>
          </Grid>
        )
      }
    </Formik >
  );
}
