import React from "react";
import { Card, CardContent, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import Image from "next/image";
import Technology from "./Technology";

const techDetails = [
  {
    name: "React",
    image: "/React.png",
    comments:
      "After trying out Angular, React, and Vue for simple app building, I decided to go with React",
  },
  {
    name: "Redux",
    image: "/Redux.png",
    comments:
      'I had imagined I would used the modernized Context API in lieu of Redux given the high praise it has gotten since React introduced "hooks," but once I tried out the newer redux hooks I felt I got the best of both worlds.',
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
      "I chose Python for the backend language for the Minerva project as I've used the language for more ad-hoc financial data analysis in the past.",
  },

  {
    name: "PostgreSQL",
    image: "/PostgreSQL.png",
    comments:
      "I suppose any modern free relational database would have worked reasonably well for these purposes, but I already had familiarity with PostgreSQL command line tools.",
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
  const techImagePath = "/images/techs";
  const [selectedName, setSelectedName] = React.useState(techDetails[0].name);

  const handleClick = (event) => {
    setSelectedName(event.target.name);
  };

  return (
    <Paper>
      <Grid direction="column" container>
        <Grid item container direction="row" wrap="nowrap">
          {techDetails.map((tech) => (
            <Grid item style={{ display: "flex" }}>
              <Technology
                selected={tech.name === selectedName}
                details={tech}
                selectedName={selectedName}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Technologies;
