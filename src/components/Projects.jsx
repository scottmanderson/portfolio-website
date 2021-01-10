import React from "react";
import Project from "./Project";
import { makeStyles, Grid, Paper } from "@material-ui/core";

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

const projectDetails = [
  {
    name: "Minerva",
    description:
      "Minerva is a financial data analysis program which fetches and stores time series information on financial assets and allows the user to interactively analyze returns.  Additional features presently in development.  The calculations are performed by a python/flask backend API using pandas and postgres SQL.  The user interface fetches and updates this data with a reactjs SPA, using components based on material-ui and redux-driven state management.",
    githubLink: "https://github.com/scottmanderson/minerva",
    exampleLink:
      "http://minerva-dev.eba-tcyuq7hy.us-east-2.elasticbeanstalk.com/",
  },
  {
    name: "Tortoise-Twitter",
    description:
      "This project provides an rss feed for a user's list of twitter handles supplied, allowing an rss user to take their twitter content once per day and mitigate the attention competition inherent in Twitter's UI.  Slow and Steady Wins The Race!",
    githubLink: "https://github.com/scottmanderson/tortoise-twitter",
    exampleLink: "http://dev-env.eba-yyv363ea.us-east-2.elasticbeanstalk.com/",
  },
];

const Projects = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h2 className="sub-heading">PROJECTS</h2>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={4}
      >
        {projectDetails.map((project) => (
          <Grid item style={{ display: "flex" }}>
            <Project details={project} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Projects;
