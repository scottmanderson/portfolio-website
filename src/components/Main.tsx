import React from "react";
import { Container, Grid, GridList } from "@material-ui/core";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Personal from "./Personal";
import Technologies from "./Technologies";

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item xs>
          <Personal />
        </Grid>
        <Grid item xs>
          <Projects />
        </Grid>
        <Grid item xs>
          <Technologies />
        </Grid>
        <Grid item xs>
          <Certifications />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
