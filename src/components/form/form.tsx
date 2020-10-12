import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Patient from "../../model/patientModel";

import PatientForm from "./patient/patientForm";

import "./form.css";
import { DialogContent } from "@material-ui/core";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  patient: Patient;
  editMode: boolean;
}

export default function Form(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DialogContent className="formWrap">
      {/* Tabs */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label="Patient" {...a11yProps(0)} />
          <Tab label="Procedure" {...a11yProps(1)} />
          <Tab label="Study" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Patient Form */}
      <TabPanel value={value} index={0}>
        <PatientForm patient={props.patient} editMode={props.editMode} />
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
