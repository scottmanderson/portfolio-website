import React from "react";
import { Container, Grid, GridList } from "@material-ui/core";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Personal from "./Personal";
import Technologies from "./Technologies";

const Main = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item>
          <Personal />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
        <Grid item>
          <Technologies />
        </Grid>
        <Grid item>
          <Certifications />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
