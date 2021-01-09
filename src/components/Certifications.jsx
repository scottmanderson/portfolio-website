import React from "react";
import { Avatar, Divider, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: 10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Certifications = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className="container">
        <h2 className="sub-heading">PROFESSIONAL CERTIFICATIONS</h2>
      </div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        wrap="nowrap"
        spacing={2}
      >
        <Grid item>
          <Image
            src="/images/AWS-SolArchitect-Associate-2020.png"
            height="250"
            width="250"
          />
        </Grid>
        <Grid item>
          <Image
            src="/images/AWS-Developer-Associate-2020.png"
            height="250"
            width="250"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Certifications;
