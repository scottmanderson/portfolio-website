import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: 10,
    paddingBottom: 20,
  },
}));

const Personal = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Typography variant="h2" gutterBottom>
        Scott Anderson
      </Typography>
      <Typography variant="h5" gutterBottom>
        Lifelong learner moving from the investment industry to full stack web
        development.
        <br />
        See my resume for the path I took to get here.
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        endIcon={<CloudDownloadOutlinedIcon />}
        href="/Scott Anderson Resume.pdf"
      >
        Download Resume
      </Button>
      <br />
    </Paper>
  );
};

export default Personal;
