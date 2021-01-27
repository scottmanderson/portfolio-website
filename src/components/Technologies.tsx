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
    textAlign: "center",
  },
  Card: {
    backgroundColor: "mintcream",
    padding: 20,
  },
}));

interface Tech {
  name: string;
  image: string;
  comments: string;
}

const techDetails: Tech[] = [
  {
    name: "React",
    image: "/React.png",
    comments:
      "I wanted to use a frontend framework within the Minerva project to provide dynamic page interactions to the user.  " +
      "In the past I have tried out Angular, React, and Vue for simple app building, and I decided to go with React as I preferred the one-way data binding approach.  " +
      "Also, this website is built with Next.js, a static site generator and server side rendering framework for React.",
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
      "I decided to us PostreSQL on the backend for the minerva financial project as financial data is customarily stored in a relational database, and PostgreSQL provides a good mix of features, flexibility, and free pricing.",
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
  {
    name: "Docker",
    image: "/Docker.png",
    comments:
      "Docker, and particularly docker-compose, made configuring and deploying these web environments far easier and more flexible than they otherwise would have been.",
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
        Project Technologies
      </Typography>
      <TabContext value={selectedName}>
        <TabList centered onChange={handleChange}>
          {techDetails.map((tech) => (
            <Tab
              key={tech.name}
              value={tech.name}
              label={tech.name}
              icon={
                <Image
                  alt={tech.name}
                  src={techImagePath + tech.image}
                  height="72"
                  width="72"
                />
              }
            />
          ))}
        </TabList>
        {techDetails.map((tech) => (
          <TabPanel key={tech.name} value={tech.name}>
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
