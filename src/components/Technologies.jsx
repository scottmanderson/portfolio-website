import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: 20,
    paddingBottom: 20,
  },
  Card: {
    backgroundColor: "mintcream",
    padding: 20,
  },
}));

const techDetails = [
  {
    name: "React",
    image: "/React.png",
    comments:
      "I wanted to use a frontend framework within the Minerva project to provide dynamic page interactions to the user.  " +
      "In the past I have tried out Angular, React, and Vue for simple app building, and I decided to go with React as I preferred the one-way data binding approach.  " +
      "Also, this website is built with Next.js, a static site generator for React which also has server side rendering capabilities (not presently in use here).",
  },
  {
    name: "Redux",
    image: "/Redux.png",
    comments:
      'I had imagined I would used the modernized Context API in lieu of Redux given the high praise it has gotten since React introduced "hooks." Before starting this project I checked the react-redux website and found they had released React hooks for Redux, and they seemed to me a better choice for a project I intend to steadily grow in complexity.',
  },
  {
    name: "Material-UI",
    image: "/MaterialUI.png",
    comments:
      "I wanted to learn a newer CSS framework and I liked what the Material themes did for my IntelliJ and VSCode editors, so I had already bought into it as a consumer.",
  },
  {
    name: "Python",
    image: "/Python.png",
    comments:
      "I chose Python for the backend language for the Minerva project as I've used the language for more ad-hoc financial data analysis in the past, and the Flask library provides a simple, microservice-oriented web server.",
  },

  {
    name: "PostgreSQL",
    image: "/PostgreSQL.png",
    comments:
      "I suppose any modern, free relational database would have worked reasonably well for these purposes, but I already had familiarity with PostgreSQL command line tools.",
  },
  {
    name: "Nodejs",
    image: "/Node.png",
    comments:
      "Any modern backend language would have worked for the Tortoise-Twitter project, but I chose to use Nodejs to use this as an opportunity to sharpen skills with promises and modern JS async/await architecture.",
  },
  {
    name: "MongoDB",
    image: "/MongoDB.png",
    comments:
      "MongoDB is a great choice for a lightweight project where the developer might change the desired schema frequently.",
  },
];

const Technologies = () => {
  const styles = useStyles();

  const techImagePath = "/images/techs";
  const [selectedName, setSelectedName] = React.useState(techDetails[0].name);

  const handleChange = (event, newValue) => {
    setSelectedName(newValue);
  };

  return (
    <Paper className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Technologies Used In Projects
      </Typography>
      <TabContext value={selectedName}>
        <TabList centered onChange={handleChange}>
          {techDetails.map((tech) => (
            <Tab
              value={tech.name}
              label={tech.name}
              icon={
                <Image
                  alt={tech.name}
                  src={"/images/techs" + tech.image}
                  height="72"
                  width="72"
                />
              }
            />
          ))}
        </TabList>
        {techDetails.map((tech) => (
          <TabPanel value={tech.name} className={styles.TabPanel}>
            <Card className={styles.Card}>
              <Typography variant="h5" gutterBottom>
                {tech.name}
              </Typography>
              <Typography variant="body1">{tech.comments}</Typography>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Paper>
  );
};

export default Technologies;
