import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: 20,
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
        I have focused my recent learning on full stack web development and data
        engineering skills.
      </Typography>
      <Typography variant="h5" gutterBottom>
        See my resume for details and contact information.
      </Typography>
      <Button
        style={{ margin: 20 }}
        variant="contained"
        color="primary"
        endIcon={<CloudDownloadOutlinedIcon />}
        href="/Scott Anderson Resume.pdf"
      >
        Download Resume
      </Button>
    </Paper>
  );
};

export default Personal;
