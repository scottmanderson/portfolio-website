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
    paddingTop: 10,
    backgroundColor: "whitesmoke",
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
        <Typography gutterBottom>
          <h3>{props.details.name}</h3>
          <p>{props.details.description}</p>
        </Typography>
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
