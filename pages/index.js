import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Summary from "../src/components/Summary";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Scott Anderson
        </Typography>
        <Summary />
      </Box>
    </Container>
  );
}
