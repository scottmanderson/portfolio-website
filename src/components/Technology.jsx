import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

const Technology = (props) => {
  return (
    <Button>
      <Typography gutterBottom>
        <Image
          src={"/images/techs" + props.details.image}
          height="72"
          width="72"
        />
      </Typography>
    </Button>
  );
};

export default Technology;
