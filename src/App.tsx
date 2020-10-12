import React from "react";
import EditExam from "./components/modal/modal";

import data from "./mocData/mocData.json";

import Patient from "./model/patientModel";

import { Paper, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

function App() {
  // Theme
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#1C9CFF",
      },
      secondary: {
        main: "#fff",
      },
      background: {
        paper: "#2B2C30",
      },
    },
  });

  // MOC Data
  const patientData: Patient = data.result.data[0];
  console.log(patientData);

  // Render
  return (
    <ThemeProvider theme={theme}>
      <Paper className="App">
        {/* Title */}
        <div className="appTitle">
          <Typography variant="h3">Challenge Accepted!!!</Typography>
        </div>

        {/* Modal */}
        <EditExam patient={patientData} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
