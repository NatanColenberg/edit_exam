import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Patient from '../../model/patientModel';
import { getPatientDisplayName } from '../../utils/patientUtils';

import PatientForm from './patient/patientForm'

import './form.css'
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  patient: Patient
}

export default function Form(props: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DialogContent className="formWrap">

      {/* Tabs */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Patient" {...a11yProps(0)} />
          <Tab label="Procedure" {...a11yProps(1)} />
          <Tab label="Study" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Patient Form */}
      <TabPanel value={value} index={0}>
        <PatientForm patient={props.patient} />
      </TabPanel>

      {/* Procedure Form */}
      <TabPanel value={value} index={1}>
        Procedure Form
      </TabPanel>

      {/* Study Form */}
      <TabPanel value={value} index={2}>
        Study Form
      </TabPanel>
    </DialogContent>

  );
}
