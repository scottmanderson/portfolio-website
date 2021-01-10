import React from "react";
import { Grid, GridList } from "@material-ui/core";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Personal from "./Personal";
import Technologies from "./Technologies";

const Main = () => {
  return (
    <Grid container direction="column" align="center" spacing={4}>
      <Grid item>
        <Personal />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
      <Grid item>
        <Certifications />
      </Grid>
      <Grid item>
        <Technologies />
      </Grid>
    </Grid>
  );
};

export default Main;
