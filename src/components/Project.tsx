import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: 20,
    paddingTop: 10,
    backgroundColor: "mintcream",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.details.name}
        </Typography>
        <Typography variant="body1">{props.details.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          href={props.details.exampleLink}
        >
          Demo
        </Button>
        <Button
          size="small"
          color="primary"
          endIcon={<GitHubIcon />}
          variant="outlined"
          href={props.details.githubLink}
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
