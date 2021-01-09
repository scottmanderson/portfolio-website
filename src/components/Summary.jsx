import React from "react";
import { Grid } from "@material-ui/core";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Copyright from "../Copyright";

const Summary = () => {
  return (
    <Grid container direction="column" align="center" spacing={4}>
      <Grid item>
        <Projects />
      </Grid>
      <Grid item>
        <Certifications />
      </Grid>
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Summary;
