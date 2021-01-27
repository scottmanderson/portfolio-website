import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: "center",
  },
}));

const Personal = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Typography variant="h2" gutterBottom>
        Scott Anderson
      </Typography>
      <Typography variant="h4" gutterBottom>
        Self-taught software developer
      </Typography>
      <Typography variant="h5" gutterBottom>
        My previous background is a multi-disciplinary role in the institutional
        investment consulting industry.
      </Typography>{" "}
      <Typography variant="h5" gutterBottom>
        See my resume for the relevant skills I have acquired and contact
        information.
      </Typography>
      <Button
        style={{ marginTop: 10 }}
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
