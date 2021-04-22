import React from "react";
import { Avatar, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Certifications = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className="container">
        <Typography variant="h4" gutterBottom>
          Professional Certifications
        </Typography>
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
            src="/images/certs/AWS-SolArchitect-Associate-2020.png"
            height="250"
            width="250"
          />
        </Grid>
        <Grid item>
          <Image
            src="/images/certs/Confluent-Developer.png"
            height="250"
            width="250"
          />
        </Grid>
        <Grid item>
          <Image
            src="/images/certs/AWS-Developer-Associate-2020.png"
            height="250"
            width="250"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Certifications;
